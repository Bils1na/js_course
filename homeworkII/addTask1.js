"use strict";

const riddle = Number.parseInt(Math.random * 100);

function guess(number) {
    let answer = Number.parseInt(prompt("Guess number from 0 to 100"));
    if (answer > number) {
        alert("Your number is greater than guessed number");
    } else if (answer < number) {
        alert("Your number is less than guessed number");
    } else if (answer === number) {
        alert("Congratulation!");
        return;
    } else {
        alert("You have to enter a number");
    }
    guess(num);
}

guess(riddle);