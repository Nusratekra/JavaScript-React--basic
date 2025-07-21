var num= Number(prompt("enter the number:"));
if(num>0)
    document.writeln("positive");
else if(num==0)
    document.writeln("zero");
else
    document.writeln("negetive");

//ternary opartor
var result= num>=0 ? "positive" : "negative"
document.writeln(result);

var newresult= num>0 ? "positive" : num<0 ? "negative" :"zero"
document.writeln(newresult);

//for loop
for(var i=1;i<5;i++){
    document.writeln("<br>JAVASCRIPT");
}

//while loop
var j = 1;
while (j < 10) {
    if (j % 2 == 0) {
        document.writeln("<br>JavaScript");
    }
    j++;
}
//do while loop
var j=1;
do{
    if (j % 5 == 0) {
        document.writeln("<br>React");
    }
    j++;
}while(j<=10);
// break and continue works same as other langauge