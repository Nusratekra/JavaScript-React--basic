// for loop => let only works inside the loop block,var can work outside the loop block


//for in => only use for object
const myObj ={
    name : 'Dipu',
    birth : 2003,
    Address : 'Puran Dhaka'
};
const myObj1 ={
    name : 'Hasnine',
    birth : 2000,
    Address : 'Puran Dhaka'
};
for (property in myObj) {
    console.log(myObj[property]);
};

//for of=> use in (array,object,string)
const myArr=[50,51,55];
for (element of myArr) {
    console.log(element);
};//to get array element
for (element in myArr) {
    console.log(element);
};//to get array index

const myString= "PRARONA NUSRAT";
for (element of myString) {
    console.log(element);
};

//importent object methods
var myObjKeys = Object.keys(myObj);    // returns array of keys
var myObjValues = Object.values(myObj); // returns array of values
var myObjEntries = Object.entries(myObj); // returns array of [key, value] pairs

console.log(myObjKeys);    // ["name", "birth", "Address"]
console.log(myObjValues);  // ["Dipu", 2003, "Puran Dhaka"]
console.log(myObjEntries); // [["name", "Dipu"], ["birth", 2003], ["Address", "Puran Dhaka"]]

//function default parameter value
//if we don't send any perameater it will not undefind ,have a defult value
function myFunction(x = 2){
    return x;
};
console.log(myFunction());//but if we pass undefind the it will aslo give default value x=2
//but if we pass null the it will give null

//spread Oparator
var spreadOp =[1,2,3];
var newspreadOp =[...spreadOp,4,5,6,7];// {...spreadOp} => spreadOp's value will be in new array
console.log(newspreadOp);

console.log({
    ...myObj,
    myObj1
});

//rest Oparator
function restOp(...params){//parameter can as much as we needed
    console.log(params);// '...params' must have to be the last perameter
}
restOp(5,6,7,8,9,10);//before restOp use 'arguments'

//short circuiting
//or operator(Only use for boolean oparator)[if it gets first True value it will stop to execution]
console.log(false||20||true);
//and operator(Only use for boolean oparator)[if it gets first false value it will stop to execution]
console.log(true&&20&&false&&null&&"HI");





