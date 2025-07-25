/*JSON stands for JavaScript Object Notation
JSON is a lightweight data-interchange format
JSON is plain text written in JavaScript object notation
JSON is used to send data between computers
JSON is language independent */
//JavaScript also has a built in function for converting an object into a JSON string:JSON.stringify()


//JSON Syntax
const person = {
  name: "Nusrat",
  age: 23,
  skills: ["Programming", "Photography"],
  hobby: "Reading books",
  alive: true,
  disease: null
};
//valide JSON
//can't give a function,a date,undefined
console.log(JSON.stringify(person));
person["name"] = "prarona";
console.log(JSON.stringify(person));
//Both JSON and XML can be used to receive data from a web server. JSON better ,we don't use it.

//JSON.parse()
const jsonString = JSON.stringify(person);   // Converts object to JSON string
const jsonObj = JSON.parse(jsonString);      // Converts JSON string back to object
console.log(jsonObj);//the text is in JSON format, or else you will get a syntax error.

const text = '["Ford", "BMW", "Audi", "Fiat"]';
console.log(text);
const jsonObjArray = JSON.parse(text);
console.log(jsonObjArray);

const Friend = '{"name":"Dipu", "birth":"2003-01-03", "city":"Dhaka"}';
console.log(Friend);
const jsonObjDate = JSON.parse(Friend);
console.log(new Date(jsonObjDate.birth));

const text1 = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';//if function must send the must send in string formate
const jsonObjFunction = JSON.parse(text1);
console.log(jsonObjFunction);//You should avoid using functions in JSON, the functions will lose their scope, and you would have to use eval() to convert them back into functions.

//JSON.stringify()
const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);//convert in string
console.log(myJSON);

const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON1 = JSON.stringify(arr);
console.log(myJSON1);
//in stringify() date and function  are like parse()

//JSON Server

async function fetchData() {
    const response = await fetch("demo.txt");
    const data = await response.json();//const data = await response.text()-> give in text formet
    console.log(data);
    
}
fetchData();

