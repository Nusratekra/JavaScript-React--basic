js Introduction:

1\.

<!DOCTYPE html>

<html>

<body>



<h2>What Can JavaScript Do?</h2>



<p id="demo">JavaScript can change HTML content.</p>



<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>



</body>

</html>//document.getElementById("demo").innerHTML= value change kore daye

2\.

<!DOCTYPE html>

<html>

<body>



<h2>What Can JavaScript Do?</h2>



<p>JavaScript can change HTML attribute values.</p>



<p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>



<button onclick="document.getElementById('myImage').src='pic\\\_bulbon.gif'">Turn on the light</button>



<img id="myImage" src="pic\\\_bulboff.gif" style="width:100px">



<button onclick="document.getElementById('myImage').src='pic\\\_bulboff.gif'">Turn off the light</button>



</body>

</html>//if js want it can also change attribute name src

3\.

<!DOCTYPE html>

<html>

<body>



<h2>What Can JavaScript Do?</h2>



<p id="demo">JavaScript can change the style of an HTML element.</p>



<button type="button" onclick="document.getElementById('demo').style.fontSize='55px'">Click Me!</button>



</body>

</html> //js html er style o change korte pare



js where to:

\#The <script> Tag

\#JavaScript in <head> or <body>

\#External JavaScript



js Output:

JavaScript can "display" data in different ways:



\#Writing into an HTML element, using innerHTML or innerText.document.getElementById(id) method.

\#Writing into the HTML output using document.write().Using document.write() after an HTML document is loaded, will delete all existing HTML

\#Writing into an alert box, using window.alert().

\#Writing into the browser console, using console.log()

1.<!DOCTYPE html>

<html>

<body>



<h1>My First Web Page</h1>

<p>My first paragraph.</p>



<script>

window.alert(5 + 6);//here "window" keyword can be ignore

alert(5 + 6);




</body>

</html>



2\.

\#You cannot access output devices from JavaScript.

\#The only exception is that you can call the window.print() method in the browser to print the content of the current window.



<!DOCTYPE html>

<html>

<body>



<button onclick="window.print()">Print this page</button>



</body>

</html>



\#The var keyword was used in all JavaScript code from 1995 to 2015.

\#The let and const keywords were added to JavaScript in 2015.

\#The var keyword should only be used in code written for older browsers.

\#The two variables price1 and price2 are declared with the const keyword.

\#These are constant values and cannot be changed.

\#The variable total is declared with the let keyword.

\#The value total can be changed.

\#Always use const if the type should not be changed (Arrays and Objects)

\#A variable declared without a value will have the value undefined.

\#If you re-declare a JavaScript variable declared with var, it will not lose its value.



Doller Sign;

<!DOCTYPE html>

<html>

<body>



<h1>JavaScript Variables</h1>



<p>The dollar sign is treated as a letter in JavaScript names.</p>



<p id="demo"></p>



<script>

let $$$ = 2;

let $myMoney = 5;

document.getElementById("demo").innerHTML = $$$ + $myMoney;




</body>

</html>

\#Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.



Let:

\#Variables declared with let have Block Scope

\#Variables declared with let must be Declared before use

\#Variables declared with let cannot be Redeclared in the same scope



Block scope:

In JavaScript, block scope means that variables declared inside a block { ... } are only accessible within that block and nowhere outside.

1\.

{

  let name = "Ekra";

  console.log(name); // ✅ Works

}

console.log(name); // ❌ Error: name is not defined



🌍 What is Global Scope?

A variable declared outside of any function or block is said to be in the global scope.

1\.

let universe = "Open to all";



function explore() {

  console.log(universe); // ✅ Accessible here

}



explore();

console.log(universe); // ✅ Accessible here too



Const:

\#Variables defined with const cannot be Redeclared

\#Variables defined with const cannot be Reassigned

\#Variables defined with const have Block Scope

this you can NOT:

* Reassign a constant value
* Reassign a constant array
* Reassign a constant object

But you CAN:

* Change the elements of constant array
* Change the properties of constant object

1\.

<!DOCTYPE html>

<html>

<body>



<h2>JavaScript const</h2>



<p>Declaring a constant array does NOT make the elements unchangeable:</p>







<script>

// Create an Array:

const cars = \\\["Saab", "Volvo", "BMW"];



// Change an element:

cars\\\[0] = "Toyota";

// Add an element:

cars.push("Audi");



// Display the Array:

document.write(cars)




</body>

</html>



Comparison Operator:

Operator	Description

* ===	equal value and equal type
* !==	not equal value or not equal type
* typeof()->	Returns the type of a variable
* instanceof()-> Returns true if an object is an instance of an object type

Object:

An object literal is a list of name:value pairs inside curly braces {}.



const person = {

&nbsp; firstName: "John",

&nbsp; lastName: "Doe",

country: "Norway"

};



1\.

// objectName.property

let age = person.age;

OR,

//objectName\["property"]

let age = person\["age"];

OR,

//objectName\[expression]

let age = person\[x];

2\.

<!DOCTYPE html>

<html>

<body>

<h1>JavaScript Object Properties</h1>

<h2>Accessing a Property with an Expression</h2>



<p id="demo"></p>



<script>

const person = {

&nbsp; firstName: "John",

&nbsp; lastName : "Doe",

&nbsp; age      :  50

};



let x = "firstName";

let y = "age";

document.getElementById("demo").innerHTML = person\[x] + " is " + person\[y] + " years old.";

</script>



</body>

</html>



\\\\adding new properties

person.nationality = "English";

//deleting property

delete person.age;

delete person\["age"];



Some solutions to display JavaScript objects are:

* Displaying the Object Properties by name
* Displaying the Object Properties in a Loop 

1\.

<script>

// Create an Object

const person = {

&nbsp;name: "John",

age: 30,

&nbsp; city: "New York"

};

// Create an Array

const myArray = Object.values(person);

// Display the Array

document.write(myArray);

</script>

2.Object.entries()

<script>

const fruits = {Bananas:300, Oranges:200, Apples:500}; 



let text = "";

for (let \[fruit, amount] of Object.entries(fruits)) {

&nbsp; text += fruit + ": " + amount + "<br>";

}

3\.

<script>

// Create an Object

const person = {

&nbsp; name: "John",

&nbsp; age: 30,

&nbsp; city: "New York"

};

// Display JSON

document.write(JSON.stringify(person));

</script>

document.write(text);

</script>

* Displaying the Object using Object.values()
* Displaying the Object using JSON.stringify().JavaScript objects can be converted to a string with JSON method JSON.stringify().

To Construct Object:

**function Person(first, last, age, eye) {**

  **this.firstName = first;**

  **this.lastName = last;**

  **this.age = age;**

  **this.eyeColor = eye;**

**}**

**// Create a Person object**

**const myFather = new Person("John", "Doe", 50, "blue");**

To Change the Object:

**const myMother = new Person("Sally","Rally",48,"green");**

**Person.prototype.changeName = function (name) {**

  **this.lastName = name;**

**}**

**// Change Name**

**myMother.changeName("Doe");**

Built in javascript constructors:

**<script>**

**// Display the Type**

**document.getElementById("demo").innerHTML =**

**"<p>The typeof new Object() is " + typeof new Object() + "</p>" +**

**"<p>The typeof new Array() is " + typeof new Array() + "</p>" +**

**"<p>The typeof new Map() is " + typeof new Map() + "</p>" +**

**"<p>The typeof new Set() is " + typeof new Set() + "</p>" +**

**"<p>The typeof new Date() is " + typeof new Date() + "</p>" +**

**"<p>The typeof new RegExp() is " + typeof new RegExp() + "</p>" +**

**"<p>The typeof new Function() is " + typeof new Function() + "</p>";**

**</script>**

The **JavaScript prototype** property allows you to add new properties to object constructors:



Example

function Person(first, last, age, eyecolor) {

&nbsp; this.firstName = first;

&nbsp; this.lastName = last;

&nbsp; this.age = age;

&nbsp; this.eyeColor = eyecolor;

}



**Person.prototype.nationality = "English";**

***Common HTML Events***

Here is a list of some common HTML events:



Event		Description

onchange		An HTML element has been changed

onclick		The user clicks an HTML element

onmouseover	The user moves the mouse over an HTML element

onmouseout	The user moves the mouse away from an HTML element

onkeydown	The user pushes a keyboard key

onload		The browser has finished loading the page



Date:

1\.

<h1>JavaScript Dates</h1>

<h2>Using new Date()</h2>

<p>Create a new date object with the current date and time:</p>

<p id="demo"></p>

<script>

const d = new Date();

document.getElementById("demo").innerHTML = d;

</script>

const d = new Date("2015-03-25");

There are generally 3 types of JavaScript date input formats:

Type			Example

ISO Date		"2015-03-25" (The International Standard)

Short Date	"03/25/2015"

Long Date		"Mar 25 2015" or "25 Mar 2015"

