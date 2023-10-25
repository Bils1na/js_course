"use strict";

// 5 > 2;
// 5 < 2;
// 5 <= 5;
// 2 == "2"; // true
// 2 === "2"; // false
// String(2) === "2"; // true
// 2 != "2"; // false
// 2 !== "2"; // true
// String(2) !== "2"; // false

// const a = 5;
// Boolean(a); //true


// const goodsCount = 100;

// if (goodsCount > 0) {
//     console.log(`You have ${goodsCount}.`);
// } else {
//     console.log("You don't have anything.");
// }


// +prompt(); // Унарный оператор
// 1 + 2; // Бинарный оператор
// goodsCount > 0 ? true : false; // Тернарный оператор

// console.log(
//     goodsCount 
//     ? `You have ${goodsCount}.` // true
//     : "You don't have anything." // false
// );


const product = "apple";

// if (product === "banan") {
//     console.log("Banan is 50 rubles for kilogram");
// } else { 
//     if (product === "mango") {
//         console.log("Mango is 80 rubles for kilogram");
//     } else { 
//         if (product === "apple") {
//             console.log("Apple is 60 rubles for kilogram");
//         } else { 
            
//         }
//     }
// }

if (product === "banan") {
    console.log("Banan is 50 rubles for kilogram");
} else if (product === "mango") { 
    console.log("Mango is 80 rubles for kilogram");
} else if (product === "apple" || product === "pear") {
    console.log("Apple or pear is 60 rubles for kilogram");
} else {
    console.log("This is unknown fruit.")
}
