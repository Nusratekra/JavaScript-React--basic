//destructuring(can happened in array and object both)
// object destructuring
const user={
    id: 251,
    name : 'Ekra',
    age : 23,
    education :{
        degree :"B.Sc"
    }
};

//want to extract the name property from an object and store it in another variable so you can use it elsewhere.
const {name:UserName} = user;
console.log(UserName);
//nested object
const {education:{degree:x}={}
} = user;
console.log(x);
//If the education object weren’t present here, it would’ve thrown an error or caused the operation to fail.
//so we can set a defult opject(output undefind)

//array destructuring
var number = [1,2,3,4,5];
var [a,b] = number;
console.log(a,b);
//if want in different order(exmp:2 and 5 need)
var [,a,,,b] = number; 
console.log(a,b);
//nested array
var number1 = [1,2,[3,100,500],4,5];
var [,,[,e,k]]= number1;
console.log(e,k);
//swaping element
var p=51;
var n=54;
[p,n] = [n,p];
console.log(p,n);

//template literals `ANY THING INSIDE BACKTICKS`
console.log(`i'm ${p} & my team mate is ${n}`);//we can also use multiline


 
