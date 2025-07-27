let num = 0;
const button = document.querySelector("#button");
const display = document.querySelector("#display");
button.addEventListener("click",() => {
    num++;
    display.textContent = num;
});
let num1 = 0;
const button1 = document.querySelector("#button1");
const display1 = document.querySelector("#display1");
button1.addEventListener("click",() => {
    num1++;
    display1.textContent = num1;
})