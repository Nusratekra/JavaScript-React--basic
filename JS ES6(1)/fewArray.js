//array.push()=> Change the main array
var E2 =[250,251,255];
E2.push(269);
console.log(E2);
E2.push(269,273);
console.log(E2);// 250,251,255,269,270
E2.push([253,254,257,271]);
console.log(E2);// output will show the last push oparation result
// array.map()
var rimi= [500,300,100];
var r = rimi.map((i) => {
    return 2*i;
 });
  console.log(r);
 console.log(rimi);//not change the main array

 //array.reduce()
 var arrayreduce = [1,2,3,4,5,6,7,8,9,10];
 var sum = arrayreduce.reduce((previousValue,currentValue) =>{
    return previousValue+currentValue;//reduce remembers the previous result so it will be like 1+2+.....+10=55
 }, 0 );//0 is initial value
  console.log(sum);//.reduce((previousValue,currentValue,currentIndex,array) can