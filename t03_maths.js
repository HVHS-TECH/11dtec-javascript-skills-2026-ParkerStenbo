/*------------------------------------------------------------PROGRAM  START------------------------------------------------------------*/


console.log("Running t02_variables.js");


/*---------------------------------------------------------VARIABLE DECLERATION---------------------------------------------------------*/


let userName = "Steve";
let userAge = Math.round(Math.random()*100);
let userMoney = Math.round(Math.random()*1000);
let currentYear = 1900 + Math.round(Math.random()*199);

let tmp;



console.log("variables delcared successfully");


/*--------------------------------------------------------------MAIN  CODE--------------------------------------------------------------*/


//adding some organisation to the console
console.log(" ")
console.log("-----------------------PROGRAM START-----------------------")
console.log(" ")

console.log("Hello "+userName);
console.log("as of "+currentYear+" you are "+userAge+" years old");
tmp = currentYear - userAge;
console.log("You were born in "+tmp);
tmp = userAge+10;
console.log("in 10 years you will be "+tmp+" years old");
console.log("you have $"+userMoney);
tmp = userMoney/2;
console.log("you spend half of your money, now you have $"+tmp);
tmp = (userMoney/2)+3;
console.log("then you get 3 dollars. now you have $"+tmp);

//adding some organisation to the console
console.log(" ")
console.log("----------------------END  OF PROGRAM----------------------")
console.log(" ")

//what it's supposed to say
/*
Hi _______

As of ____ you are __ years old

You were born in ____

In 10 years you will be __ years old

You have __ dollars

You spend half of your money, now you have __

Then you get $3, now you have __
*/


console.log("code complete")


/*---------------------------------------------------------------FUNCTION---------------------------------------------------------------*/



/*------------------------------------------------------------END OF PROGRAM------------------------------------------------------------*/