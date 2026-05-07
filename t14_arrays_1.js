/*------------------------------------------------------------PROGRAM  START------------------------------------------------------------*/


console.log("Running t14_arrays.js");


/*---------------------------------------------------------VARIABLE DECLERATION---------------------------------------------------------*/


let userName = ".... ??? hello who? how can you see this? how did you bypass the form? get out of here right now!!!";
let userAge = 10000000000000000000000000000;
let userMoney = 0.000000000000000000000000001;
let currentYear = 1900 + Math.round(Math.random()*199);
let messages = ["damn you really hate chocolate eh", "SCREW CHOCOLATE ALL MY HOMIES HATE CHOCOLATE", "chocoloate kinda sucks anyway", "it doesn't look bad but it doesn't look too good.", "yummy", "delectable", ".,;,,;,.", "<img src='../Image/moist critical.jpg'>", "beginning to get questionable how much you like this chocolate", "so you really like it huh", "I think you're taking this a bit too far", "STOP", "THIS IS TOO MUCH", "YOU'RE NOT SUPPOSED TO LIKE CHOCOLATE THIS MUCH WHAT ARE YOU DOING", "YOU CAN NOT <h1>POSSIBLY</h1> LOVE CHOCOLATE THIS MUCH", "<img src='../Image/Damn.webp'>"];
let userChocolateAppreceation = 15;
let tmp;

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField");
const MONEY_FIELD = document.getElementById("moneyField");
const CHOCOLATE_RATING_FIELD = document.getElementById("chocolateAppreceationField");

console.log("variables delcared successfully");


/*--------------------------------------------------------------MAIN  CODE--------------------------------------------------------------*/

//I'm going to put the begin function in the main code because  it kind of is the main code. This is like the web version of the "loop"
//function which should be put in the "MAIN CODE" secition.
function begin() {
    userName = NAME_FIELD.value;
    userAge = Number(AGE_FIELD.value);
    userMoney = Number(MONEY_FIELD.value);
    userChocolateAppreceation = Number(CHOCOLATE_RATING_FIELD.value);
    run();
}

function run() {
    OUTPUT.innerHTML = "<br>";
    OUTPUT.innerHTML += "<br>";
    welcome();
    OUTPUT.innerHTML += "<p>You have $" + userMoney + "</p>";
    displayProduct("Chocolate bar", 4, userMoney);
    OUTPUT.innerHTML += "<p>Your chocolate appreceation:</p>";
    if (((userChocolateAppreceation + 1) > 14) || ((userChocolateAppreceation + 1) < -1))
    {
        OUTPUT.innerHTML += messages[15];
    }
    else{
        OUTPUT.innerHTML += messages[userChocolateAppreceation + 1];
    }
    OUTPUT.innerHTML += "<br>";
    OUTPUT.innerHTML += "<br>";
    displayProduct("chip", 3, userMoney);
    displayProduct("drink", 2.50, userMoney);

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
        OUTPUT.innerHTML += "<p>You will have $" + calculateChange(_currentMoney, _price) +" Left over!</p>";
        OUTPUT.innerHTML += "<p>Will you purchase this item?</p>";
        OUTPUT.innerHTML += "<button onclick=purchase(" + _price + ")>PURCHASE</button>";
        OUTPUT.innerHTML += "<br>";
    }
    else
    {
        OUTPUT.innerHTML += "<p>Your broke ass can't even aford our cheap ahh " + _name + "s</p>";
        OUTPUT.innerHTML += "<br>";
    }
    console.log("function called successfully using paramiters "+_name+", "+_price+", "+_currentMoney);

}

function purchase(_price)
{
    userMoney -= _price;
    run();
    console.log("function called successfully using paramiter " + _price);
}

function calculateChange (_money, _price)
{
    let leftOverChange = _money - _price;
    return leftOverChange;
    console.log("function called successfully using paramiters "+_money+", "+_price);
}

/*------------------------------------------------------------END OF PROGRAM------------------------------------------------------------*/