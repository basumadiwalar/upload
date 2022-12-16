"use strict";
function patientdetails(

)
{
 
  let PatientAge= [22,25,23,40] ; 
  let [Raj,Ram,Ravi,Rat]=  PatientAge;

  


  console.log("Patient with there address are as follows (no rest para):\n ")
  console.log("patients Raj Having a age of : "+ Raj );
  console.log("patient Ram having a age of : "+Ram);
  console.log("patient Ravi are: "+Ravi);
  console.log("patient Rat having  age of : "+Rat);

}
patientdetails();
function opd()
{
  var names=["raj","ram"];
  names.concat("ravi");
  console.log("names are :" ,names)
}


opd();






function Available_Time_of_Doctor(params) 
{
  let timeslot1_cold = [10,11,12];
   let timeslot2_coughh= [2,3,4];
   let timeslot3_headache= [6,7,8];
  console.log("For cold available at: ",timeslot1_cold);
  console.log("For Gastric available at: ",timeslot2_coughh);

}
Available_Time_of_Doctor();
function Available_Doctor_NAme()
{
let doctors_for_cold=["Dr_Raj","Dr_Arun","Dr.yash"];
let doctors_for_cough=["Dr_Rajesh","Dr_Arun","Dr.yashodhar"];

let doctors_for_headache=["Dr_dRaj","Dr_vArun","Dr.ayash"];
console.log("Available Doctor For Cold : ",doctors_for_cold);
console.log("Available Doctor For Cough: ",doctors_for_cough);
console.log("Available Doctor For headche : ",doctors_for_headache);


}
Available_Doctor_NAme();
