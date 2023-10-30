"use strict";

let symbols = "1234567890!@#$%^&*()-_=+;:[]{}/?.,qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
let password = "";


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) * min;
}

function generate(passLength) {
    let symbolPosition = getRandomInt(0, password.length);
    password += symbols.charAt(symbolPosition);
    passLength--;
    if (passLength != 0) {
        generate(passLength);
    }
}

function askPassLength () {
    return Number.parseInt(prompt("Enter length of password"));
}

generate(askPassLength());
alert(`Your password: ${password}`);