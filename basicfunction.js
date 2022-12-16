"use strict" ;
window.onload = jsfunction;


function jsfunction(){
    var x=89;
    console.log("jsfunction: x = ",x)
}
function jsfunction2(){
    
    console.log("jsfunction (before declaration): x = ",x)

    var x=87;
    console.log("jsfunction sfter declaration: x" ,x)
}
jsfunction2();