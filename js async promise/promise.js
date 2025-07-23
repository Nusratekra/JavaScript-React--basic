const st = false;
console.log('Task1');
const p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        if (st) {
            resolve("Task2");
        } else {
            reject("Failed");
        }
    }, 2000);
});
p
    .then(function(value) {
        console.log(value);
    })
    .catch(function(error) {
        console.log(error);
    });
console.log('Task3');


