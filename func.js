"use strict";
let add;
function sum (...nums)
{
add =0;
for(var num of nums){
    add = add+num;
}
return  add;
 



}
let addition= sum(10,1000,2,100000) ;


console.log(addition);