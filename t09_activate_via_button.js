/*------------------------------------------------------------PROGRAM  START------------------------------------------------------------*/


console.log("Running t07_functions_parameters.js");


/*---------------------------------------------------------VARIABLE DECLERATION---------------------------------------------------------*/


let userName = "Steve";
let userAge = Math.round(Math.random()*100);
let userMoney = Math.round(Math.random()*1000);
let currentYear = 1900 + Math.round(Math.random()*199);

let tmp;

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");


console.log("variables delcared successfully");


/*--------------------------------------------------------------MAIN  CODE--------------------------------------------------------------*/



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


console.log("code complete");


/*---------------------------------------------------------------FUNCTION---------------------------------------------------------------*/

function begin() {
    OUTPUT.innerHTML = "<br>";
    OUTPUT.innerHTML += "<br>";
    welcome();
    displayProduct("Chocolate bar", 4);
    displayProduct("chip", 3);
    displayProduct("drink", "2.50");
    OUTPUT.innerHTML += "<br>";
    OUTPUT.innerHTML += "<br>";

    //Adding it to the doc
    OUTPUT.innerHTML += "<p>Hello " + userName + "</p>";
    OUTPUT.innerHTML += "<p>As of " +currentYear + " you are " + userAge + " years old</p>";
    tmp = currentYear - userAge;
    OUTPUT.innerHTML += "<p>You were born in " + tmp + "</p>";
    tmp = userAge+10;
    OUTPUT.innerHTML += "<p>In 10 years you will be " + tmp + " years old</p>";
    OUTPUT.innerHTML += "<p>You have $" + userMoney + "</p>";
    tmp = userMoney/2;
    OUTPUT.innerHTML += "<p>You spend half of your money, now you have $" + tmp + "</p>";
    tmp = (userMoney/2)+3;
    OUTPUT.innerHTML += "<p>Then you get 3 dollars. now you have $" + tmp + "</p>";
    console.log("function called successfully");
}

function welcome() {
    OUTPUT.innerHTML += "<h2>Welcome to the shop</h2>";
    console.log("function called successfully");
}

function displayProduct(_name, _price) {
    OUTPUT.innerHTML += "<p>We are selling " + _name + "s for $" + _price + "</p>";
    console.log("function called successfully using paramiters "+_name+", "+_price)
}

/*------------------------------------------------------------END OF PROGRAM------------------------------------------------------------*/