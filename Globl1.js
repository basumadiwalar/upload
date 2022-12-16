let globallet ="this is globl let variable";
var globalvar="this is globl var variable";

let numlet=90;
var numvar=65;
const num_const=88;


function firstfun()
{
    let localLet ="this is globl let variable";
var lacalVar="this is globl var variable";
undeclaredLocalVar="This is undeclaredvr";

console.log("this is globl let variable: ",globallet);
console.log("this is globl var variable: ",globalvar);

console.log("this is let numlet fronm inssise: ",numlet);
console.log("this is let numVr fronm inssise: ",numvar);
console.log("this is let numtConst fronm inssise: ",num_const);

console.log("this is localnumlet fronm inssise: ",localLet)
console.log("this is localvar numlet fronm inssise: ",lacalVar)
console.log("this is let numlet fronm inssise: ",undeclaredLocalVar)



}
firstfun();

function second1()
{
    let numLet=89;
    var numVar=98;
    const numk=76;
  console.log("redeclared",numLet);
  console.log("redeclared",numVar);
  console.log("redeclared",numk);

}
second1();

function fourth()
{
  console.log("Staring the loop........")
  for(let i= 0; i<89;i++)
  {
    console.log("numbers",i
    +1)
  }
}
fourth();


function fifth()
{
  let name= "raj";
  console.log("name is : ",name);
}
fifth();

