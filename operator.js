"use strict";
console.log("max of 5,7,2 is : ",Math.max(5,7,8));

let arr1=[6,9,76];
console.log("max num is: without spread is ",Math.max(arr1));
console.log("max num is: with spread is ",Math.max(...arr1));


let arr2=[1,3,2,4];
let arr3=[6,7,8,9,7888];
console.log("max num is: with two arrays isssss spread is ",Math.max(...arr2,...arr3));

let str1="helllloooo";
console.log("string is: ",str1);

console.log(...str1);
console.log(Array.from(str1));






























