/*------------------------------------------------------------PROGRAM  START------------------------------------------------------------*/


console.log("Running t15_for_loop.js");


/*---------------------------------------------------------VARIABLE DECLERATION---------------------------------------------------------*/


let vodkaBottles = 0;

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const VODKA = document.getElementById("vodkaField")

console.log("variables delcared successfully");


/*--------------------------------------------------------------MAIN  CODE--------------------------------------------------------------*/

//I'm going to put the begin function in the main code because  it kind of is the main code. This is like the web version of the "loop"
//function which should be put in the "MAIN CODE" secition.
function begin() {
    vodkaBottles = Number(VODKA.value);
    run();
}

function run() {
    OUTPUT.innerHTML = "<br>";
    OUTPUT.innerHTML += "<br>";
    if (vodkaBottles < 0)
    {
        OUTPUT.innerHTML += "You're not yet drunk enough to have negitave bottles of vodka";
        vodkaBottles = 0 -  vodkaBottles;
    }
    console.log("Loop starting");
    for (let i = vodkaBottles; i >= (0 - vodkaBottles); i--)
    {
        OUTPUT.innerHTML += "<br>";
        if (i > 50)
        {
            OUTPUT.innerHTML += i + " bottles of vodka on the wall";
            OUTPUT.innerHTML += "<br>";
            OUTPUT.innerHTML += i + " BOTTLES OF VODKA?!?!";
            OUTPUT.innerHTML += "<br>";
            OUTPUT.innerHTML += "True comrade have a drink to celebrate";
            OUTPUT.innerHTML += "<br>";
            OUTPUT.innerHTML += i -1 + " bottles of vodka left on the wall";
            if ((vodkaBottles - i) > 20)
            {
                OUTPUT.innerHTML += "<br>";
                OUTPUT.innerHTML += "You're beginning to feel kinda drunk";
            }
        }
        else if (i > 0)
        {
            OUTPUT.innerHTML += i + " bottles of vodka on the wall";
            if ((vodkaBottles - i) > 20)
            {
                OUTPUT.innerHTML += "<br>";
                OUTPUT.innerHTML += "You're beginning to feel kinda drunk";
            }
            OUTPUT.innerHTML += "<br>";
            OUTPUT.innerHTML += "There's still vodka on the wall have another drink";
            OUTPUT.innerHTML += "<br>";
            OUTPUT.innerHTML += i -1 + " bottles of vodka left on the wall";
        }
        else if (i == 0)
        {
            OUTPUT.innerHTML += "despite there being no vodka left you're so drunk you have another";
            OUTPUT.innerHTML += "<br>";
        }
        else if (i < 0)
        {
            OUTPUT.innerHTML += i + " bottles of vodka on the wall";
            OUTPUT.innerHTML += "<br>";
            OUTPUT.innerHTML += "This shouldn't be possible but you don't care.";
            OUTPUT.innerHTML += "<br>";
            OUTPUT.innerHTML += "You're so drunk that you keep taking vodka from a wall where there is no vodka left despite how impossible that is";
            OUTPUT.innerHTML += "<br>";
            OUTPUT.innerHTML += "You've become a god";
            OUTPUT.innerHTML += "<br>";
            OUTPUT.innerHTML += "You have another drink to celebrate";
        }
        OUTPUT.innerHTML += "<br>";
        OUTPUT.innerHTML += "<br>";
        console.log("loop run once with i = " + i);
    }
    console.log("Loop complete");
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



/*------------------------------------------------------------END OF PROGRAM------------------------------------------------------------*/