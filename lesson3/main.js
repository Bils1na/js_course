"use strict";

for (let i = 10, a = 50;
     i >= 0 && a < 1000; 
     i -= 2, a += 50) {
         console.log(i);
     }

while (true) {
    const userInput = prompt("Enter number");
    const userNumber = Number(userInput);
    if (userNumber > 0 && Number.isInteger(userNumber)) {
        console.log("Great");
        break;
    }
    console.log("That's wrong!");
}
