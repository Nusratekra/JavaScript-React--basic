var array = [1,2,3,4,5,6,7,8,9,10];
var result = array.find(function(currentVale){//every element of array will go through this function if find any true then it will break
    return currentVale> 4;
});
console.log(result);
console.log(array);// we can also function(currentVale,currentIndex,array)
