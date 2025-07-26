var arraySplice = [1,2,3,4,5,6,7,8,9,10];

// Remove 2 items starting at index 1, and insert 11, 12, 13
var result4 = arraySplice.splice(1, 2, 11, 12, 13);

console.log(arraySplice); // Output: [1,11,12,13,4,5,6,7,8,9,10]
console.log(result4);     // Output: [2,3]
