var num = 20;
console.log(typeof(num)); //check the data type

n =toString(num);//change to string
console.log(typeof(n));
document.writeln(num);
/* to covert in int parseInt()
to convert in float parseFloat()
toFixed(2) means after points(dosomik) i want to see only 2 digit
toPrecision(1) means only show one charecter from the whole lenght [n = 3.24 toPrecision(1) output 3  if toPrecision(2) = 3.2]
*/
//number methods(any data type convert into int)
console.log(typeof(Number("51")));
console.log(Number(true));

//string concatanetion
document.writeln("<br>Maliha" +" " +"Afrose");
let fn = "Dipu";
let ln ="Banik";
let fulln = fn + ln;
document.writeln("<br>"+fulln);
document.writeln(fn.concat(ln));//concatanetion using function
document.writeln(fulln.length);//.length= for string length
let name1 = prompt("Enter you langauge name:");//prompt()it is for user input
document.writeln(name1);
document.writeln("<br>"+fulln.charAt(3));//.charAt()= for perticuler index data
document.writeln("<br>"+fulln.toUpperCase());
document.writeln("<br>"+fulln.toLowerCase());
document.writeln("<br>"+fulln.slice(0,5));//sliceing as python