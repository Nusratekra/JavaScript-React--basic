//HTML DOM (Document Object Model)
console.log(document.getElementById("demo"));
//getElementById()->ID wala element get koro
console.dir(document.getElementById("demo"));
const p =document.getElementById("demo");
p.innerHTML = "NUSRAT AHMMED EKRA";
//p.innerHTML can change innerHtml

//DOM Document(W3school)
//document is a Object.//Finding HTML Elements
console.log(document.getElementsByTagName("p"));
console.log(document.getElementsByClassName("ancor"));
document.getElementById("demo1").innerHTML="Prarona"

//HTML DOM Elements
/*The following HTML objects (and object collections) are also accessible:
document.anchors
document.body
document.documentElement
document.embeds
document.forms
document.head
document.images
document.links
document.scripts
document.title */
console.log(document.getElementsByClassName("ancor"));//getElementsByClassName-> array
//getElementsByTagName-> array
console.log(document.querySelector('.ancor'));
console.log(document.querySelector('#demo'));
console.log(document.querySelectorAll('.ancor'));

const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length ;i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;
//HTML DOM - Changing HTML
document.getElementById("image").src = "images.png";
//Dynamic HTML content
document.getElementById("demo5").innerHTML = "Date : " + Date();
//Never use document.write() after the document is loaded. It will overwrite the document.

//Form Validation
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
//isNaN -> is not a number

//HTML DOM - Changing CSS
const p1 = document.querySelector('#demo10');
p1.style.color = "red";
p1.style.fontSize = "24px";

function styling(){//event
    const h = document.querySelector('#demo11');
    h.style.color = "Blue";
};

//DOM Events
function changeText(){
    const title = document.querySelector('#title');
    title.innerHTML="A MAN CALLED OVE";
};
/*onmousedown and onmouseup
onload
onfocus
Mouse Events
onmousover and onmousmove*/

//DOM EventListener
function myFunction(){
    document.writeln("Forty Rules Of Love");
}
const button = document.getElementById("button");
button.addEventListener('click',myFunction);//can use this multyple time

//DOM Elements (Nodes)
const para = document.createElement("p");// brackat er vitor sei tag thakbe ja create korte chai ,exmple: .createElement("img")
const node = document.createTextNode("EDENBAURG");
para.appendChild(node);//<p>EDENBAURG</p>
const element = document.getElementById("div1");
element.appendChild(para);
const p10 =document.getElementById("p10");
element.insertBefore(para,p10);//1st para then before which
const div1 =document.getElementById("div1");
const p11 =document.getElementById("p11");
div1.removeChild(p11);
