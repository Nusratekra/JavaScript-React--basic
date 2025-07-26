var array1 = [1,2,3,4,5,6,7,8,9,10];
var result1 = array1.findIndex((CurrentValue,index,array0) =>{//it returns index value,if it return -1 that means no element fill the condition
    return !(CurrentValue % 2)
} )
 console.log(result1);