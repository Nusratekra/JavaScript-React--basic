var arrayFilter = [1,2,3,4,5,6,7,8,9,10];
var result2 = array.filter(function(CurrentValue1,index1,array10){//only show that which satisfite the condition
    return CurrentValue1% 3;
});
 console.log(result2);//main array will not change