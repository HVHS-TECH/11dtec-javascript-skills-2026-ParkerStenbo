/*------------------------------------------------------------PROGRAM  START------------------------------------------------------------*/


console.log("Running t12_conditionals.js");


/*---------------------------------------------------------VARIABLE DECLERATION---------------------------------------------------------*/


let userName = ".... ??? hello who? how can you see this? how did you bypass the form? get out of here right now!!!";
let userAge = 10000000000000000000000000000;
let userMoney = 0.000000000000000000000000001;
let currentYear = 1900 + Math.round(Math.random()*199);

let tmp;

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField");
const MONEY_FIELD = document.getElementById("moneyField");


console.log("variables delcared successfully");


/*--------------------------------------------------------------MAIN  CODE--------------------------------------------------------------*/

//I'm going to put the begin function in the main code because  it kind of is the main code. This is like the web version of the "loop"
//function which should be put in the "MAIN CODE" secition.
function begin() {
    userName = NAME_FIELD.value;
    userAge = Number(AGE_FIELD.value);
    userMoney = Number(MONEY_FIELD.value);
    run();
}

function run() {
    OUTPUT.innerHTML = "<br>";
    OUTPUT.innerHTML += "<br>";
    welcome();
    OUTPUT.innerHTML += "<p>You have $" + userMoney + "</p>";
    displayProduct("Chocolate bar", 4, userMoney);
    displayProduct("chip", 3, userMoney);
    displayProduct("drink", 2.50, userMoney);
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
    OUTPUT.innerHTML += "<p>All this money stuff is merely theoretical. Please go spened all your money on our products above :3</p>";
}

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

function welcome() {
    OUTPUT.innerHTML += "<h2>Welcome to the shop</h2>";
    console.log("function called successfully");
}

function displayProduct(_name, _price, _currentMoney) {
    OUTPUT.innerHTML += "<p>We are selling " + _name + "s for $" + _price + "</p>";
    if (_currentMoney >= _price)
    {
        OUTPUT.innerHTML += "<p>You can afford this item!</p>";
        OUTPUT.innerHTML += "<br>";
    }
    else
    {
        OUTPUT.innerHTML += "<p>Your broke ass can't even aford our cheap ahh " + _name + "s</p>";
        OUTPUT.innerHTML += "<br>";
    }
    console.log("function called successfully using paramiters "+_name+", "+_price+", "+_currentMoney);
}

/*------------------------------------------------------------END OF PROGRAM------------------------------------------------------------*/