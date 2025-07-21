//arithmatic oparator -> +,-,*,%,/,**(exponential),++,--
//assignment oparator -> =,+=,-=,*=,/=,%=,**=
let x = prompt("Enter the first num:");
let y = prompt("Enter the second num:");
x=parseInt(x,10);
y=parseInt(y,10);
let z;
z=x+y;
document.writeln( "x + y ="+z +"<br>");
document.writeln( "x - y ="+(x-y)+"<br>");
document.writeln( "x * y ="+(x*y)+"<br>");
document.writeln( "x/y ="+(x/y)+"<br>");
document.writeln( "x % y ="+(x%y)+"<br>");
n=prompt("template literals:")
document.writeln(`my name is ${n}<br>`);
//relational oparator
document.writeln(22==22);//only compare value
document.writeln(22==="22");//only compare datatype