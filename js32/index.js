//treditional function
function printName(Bookname){
    document.writeln(Bookname+"<br>");
}

printName("A  Man called Ove<br>");
printName("Thye bell jar <br>");


function Book(){
    for (let index = 1; index < 2; index++) {
        var bname = prompt("enter the book name:")
        document.writeln(bname+"<br>");
        
    }
}
Book();

//IIFES(immediately invokeable function Expression)
(function cat(massage) {
    document.writeln(massage+"Aduri , Chomchom , Payas , Zam.<br>")
    
})("I have Four cats Named : <br>");
//function expression
const line = function cat() {
    document.writeln("<b>My gallery is my GitHub—each image a commit to moments that shaped me, even if no one ever forks them.</b><br>");
    
}
line();