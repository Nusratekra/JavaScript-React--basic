//array
var lang=["C","C++","Java","JavaScript","Python"]
for (let index = 0; index < lang.length; index++) {
    document.writeln(lang[index]);
}
document.writeln("<br>");
//array libray function
var num=[51,53,54,55,56,69,72,71]
num.push(73);// .push(value) -> add the value in the exsisting arraty
for (let index = 0; index < num.length; index++) {
    document.writeln(num[index]);
}
document.writeln("<br>");
num.pop();// .pop(value) -> remove the value in the exsisting array(last value)
for (let index = 0; index < num.length; index++) {
    document.writeln(num[index]);
}
document.writeln("<br>");
//cocatanation
var numLang=lang.concat(num);// array1.concat(array2) -> marge two array
for (let index = 0; index < numLang.length; index++) {
    document.writeln(numLang[index]);
}
