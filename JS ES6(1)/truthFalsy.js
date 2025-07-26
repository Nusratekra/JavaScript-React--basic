//it will cast in boolean when we use it in boolean context.like if/else (true,false)
var myVar ="";
if(myVar){
    console.log("i am Truthy");
}else{
    console.log("i am Falsy");
}//output :i am Falsy

var mV ="test";
if(mV){
    console.log("i am Truthy");
}else{
    console.log("i am Falsy");
}//output :i am Truthy