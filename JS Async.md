#### JS Async:

##### callback:

A callback is a function passed as an argument to another function.A callback function can run after another function has finished.

Function Sequence:

JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

Sequence Control:

Sometimes you would like to have better control over when to execute a function.

\\\\callback

<!DOCTYPE html>

<html>

<body>

<h2>Callback Functions</h2>

<p>The result of the calculation is:</p>

<script>

function myDisplayer(sum) {

&nbsp; document.write(sum);

}

function myCalculator(num1, num2, myCallback) {

&nbsp; let sum = num1 + num2;

&nbsp; myCallback(sum);

}

myCalculator(5, 5, myDisplayer);

</script>

</body>

</html>

##### Asynchronous JavaScript:

Functions running in parallel with other functions are called asynchronous

setTimeout() -> is a callback function\[ by using setTimeout() we cam make js Asynchronous.we have to give a fixed time to run after the time end it execute that code,if js see setTimeout() it execute later]

CODE:

console.log('Line 1');

setTimeout(function(){

&nbsp;	console.log('Line 2');

},2000);

console.log('Line 3');

OUTPUT:

Line 1

Line 3

Line 2\[for setTimeout() it execute late]

setInterval() -> after sometime it repeat to execute. 

CODE:

console.log('Line 1');

setInterval(function(){

 	console.log('Line 2');

},2000);

console.log('Line 3');

OUTPUT:

Line 1

Line 3

Line 2 (again and again)

###### Promises:

"Producing code" is code that can take some time."Consuming code" is code that must wait for the result.**A Promise is an Object that links Producing code and Consuming code.**

Code:

const st = false;

console.log('Task1');

const p = new Promise(function(resolve, reject) {

&nbsp;   setTimeout(function() {

&nbsp;       if (st) {

&nbsp;           resolve("Task2");

&nbsp;       } else {

&nbsp;           reject("Failed");

&nbsp;       }

&nbsp;   }, 2000);

});

p

&nbsp;   .then(function(value) {

&nbsp;       console.log(value);

&nbsp;   })

&nbsp;   .catch(function(error) {

&nbsp;       console.log(error);

&nbsp;   });

console.log('Task3');

###### Async-Await:

**async makes a function return a Promise,await makes a function wait for a Promise.**



// Use async-await or promise chaining to run them

async function courseFlow() {

&nbsp; try {

&nbsp;   const certificate = await getCertificate();

&nbsp;   console.log(certificate);

&nbsp; } catch (err) {

&nbsp;   console.log(err);

&nbsp; }

}





