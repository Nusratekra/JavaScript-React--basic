var n=[22,31,60,4,8.99]
var newn= n.filter(function (x){
    return x>10;
})
document.writeln(n);// .filter() this function give a new array based on condition

// Arrow function
const add = (a, b) => {
  return a + b;
}

// যদি শুধু একটা এক্সপ্রেশন থাকে, তাহলে {}
const add = (a, b) => a + b;
