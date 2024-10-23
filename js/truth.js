let fname="";

function greet() {
    let greetParagraph = document.getElementById("greet");

    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    fname = document.getElementById("fname").value;

    greetParagraph.innerHTML = "Greetings "+age+" years old "+fname+" "+lname;
}

function trivia1 () {
    let triviaAnswer = document.getElementById("trivia1 answer");

    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", incorrect";
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", incorrect";
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", correct";
    }
}

function checkLie() {
    let truthLieAnswer = document.getElementById("truth-lie-answer");

    let truth1Selected = document.getElementById("truth1").checked;
    let truth2Selected = document.getElementById("truth2").checked;
    let lieSelected = document.getElementById("lie").checked;

    if (truth1Selected) {
        truthLieAnswer.innerHTML = fname + ", incorrect. I am actually allergic to cats";
    } 
    else if (truth2Selected) {
        truthLieAnswer.innerHTML = fname + ", incorrect. I do have a cat";
    } 
    else if (lieSelected) {
        truthLieAnswer.innerHTML = fname + ", correct. I have never fallen off a cliff";
    }
}