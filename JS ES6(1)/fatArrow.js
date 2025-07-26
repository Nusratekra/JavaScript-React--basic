/*function n(){
    return 10;
} */

//arrowFunction
let n =() => {
    return 10;
}
// ALSO CAN WRITE IN ONE LINE
// IF IT RETURN SOMTHING (let n =() => 10;)
console.log(n());

let n1 =(n) => n;
console.log(n1(30));

//arithmatic calculation
let n2 =(a,b) => a+b;
console.log(n2(10,7));
/*
const javaScript = {
    name: 'javaScript',
    librsries: ['React','Angular','Vue'],
    printlibrsries: function(){
        this.librsries.forEach(function(a) {
            console.log(`${this.name} loves ${a}`);
        })//this keyword means javaScript function (forEach)
    }
};*/

//to solve the problem
/*
const javaScript = {
    name: 'JavaScript',
    librsries: ['React','Angular','Vue'],
    printlibrsries: function(){
        this.librsries.forEach((a) => {
            console.log(`${this.name} loves ${a}`);
        });
    }
};
javaScript.printlibrsries();*/

//To Be convinient we use arrow function
const javaScript = {
    name: 'JavaScript',
    librsries: ['React','Angular','Vue'],
    printlibrsries: function(){
        this.librsries.forEach((a) => console.log(`${this.name} loves ${a}`));
    }
};
javaScript.printlibrsries();