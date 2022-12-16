"use strict";
let grades_of_students= ["A","B","C",7,"5"];
console.log("Iterating over elements ",grades_of_students.length);
var i;
for(i=0;i<grades_of_students.length;i++)
{
    console.log("marks",grades_of_students[i]);
}
for(i of grades_of_students)
{
    console.log("dummmyyyyyyy",i)
}


