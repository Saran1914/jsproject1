// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()

function add(){
    
    let a= parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var z = a + b;
    document.getElementById("button1").innerHTML =z;
}

function sub(){
    
    let a= parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var z = a - b;
    document.getElementById("button2").innerHTML =z;
}

function mul(){
    
    let a= parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var z = a * b;
    document.getElementById("button3").innerHTML =z;
}
function div(){
    
    let a= parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var z = a / b;
    document.getElementById("button4").innerHTML =z;
}
// function add(){
//     document.getElementById("b1").innerHTML=z;
//     let a=5;
//     var b=6;
//     var z = a + b;
//     document.write(z) 
// }

// function sub(){
//     document.getElementById("b2").innerHTML=z;
//     let a=5;
//     var b=6;
//     var z = a - b;
//     document.write(z)
// }

// function mul(){
//     document.getElementById("b3").innerHTML=z;
//     let a=5;
//     var b=6;
//     var z = a * b;
//     document.write(z)
// }

// function div(){
//     document.getElementById("b4").innerHTML=z;
//     let a=5;
//     var b=6;
//     var z = a / b;
//     document.write(z)
// }

// 
// display Syntax
// innerHTML()
// document.write()
// window.alert() or alert()
// console.log()

// display function
// document.write(5+6);
// window.alert("Sorry to interrupt");
// console.log(5+6);

// datatypes
// let a=5;
// var b=6;
// const c=7;

// adding to numbers
// var x = 5;
// var y = 5;
// var z = x + y;
// console.log(z);
// document.getElementById("add").innerHTML = z;
