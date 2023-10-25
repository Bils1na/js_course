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


// const product = "apple";

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

// if (product === "banan") {
//     console.log("Banan is 50 rubles for kilogram");
// } else if (product === "mango") { 
//     console.log("Mango is 80 rubles for kilogram");
// } else if (product === "apple" || product === "pear") {
//     console.log("Apple or pear is 60 rubles for kilogram");
// } else {
//     console.log("This is unknown fruit.");
// }

// switch(product) {
//     case "banan":
//         console.log("Banan is 50 rubles for kilogram");
//         break;
//     case "mango":
//         console.log("Mango is 80 rubles for kilogram");
//         break;
//     case "apple":
//     case "pear":
//         console.log("Apple or pear is 60 rubles for kilogram");
//         break;
//     default:
//         console.log("This is unknown fruit.");
// } // DRY Don't reapet yourself

// switch(true) {
//     case num === 1:
//         console.log("num = 1");
//         break;
//     case num > 1 && num < 5:
//         console.log("num is around [2, 4]");
//         break;
//     case num >= 5:
//         console.log("num >= 5");
//         break;
//     default:
//         console.log("Invalid number");
// } 

// alert();
// prompt();
// console.log(); // functions

// sayPrice();
// sayPrice();


// function sayPrice() {
//     console.log("Banan is 50 rubles");
//     console.log("Banan is 50 rubles");
//     console.log("Banan is 50 rubles");
//     console.log("Banan is 50 rubles");
//     console.log("Banan is 50 rubles");
//     console.log("Banan is 50 rubles");
// }

// const name = prompt("Enter name: ");

// const price = getPrice();
// console.log(`Price: ${price}`);


// function getPrice() {
//     const result = 25 + 25;
//     return result;
// }

// const product = "apple";
// const appleCount = 10;
// const applePrice = getProductPrice(product);

// const superProduct = "banan";
// const bananPrice = getProductPrice(superProduct);

// const mangoPrice = getProductPrice("mango");

// const applePrice = getProductPriceByCount(product, appleCount);

// function getProductPrice(str) {
//     switch(str) {
//         case "banan":
//             return 50;
//         case "mango":
//             return 80;
//         case "apple":
//         case "pear":
//             return 40;
//         default:
//             return NaN;
//     }
// }

// function getProductPriceByCount(productName, count) {
//     const price = getProductPrice(productName);
//     const result = price * count;
//     return result;
// }

// console.log(`Apple price for 10 kilogram = ${applePrice}`);
// console.log(`Mango price ${mangoPrice}`);
// alert(`Banan price ${bananPrice}`);

// const name = "artem";
// const age = 26;

// function $_newName() {

// }

// fn();

// function fn() {

// }

// fn();

// const fn2 = function () {

// };

// fn2();

// const fn = () => console.log(123);
// fn();

// function fn(a, b, c) {
//     console.log(arguments);
// }
// fn(5, "10"); // 5 10 undefined

// && - and; || - or
// if (a > b && c === 10) {
//     // ...
// }

// if (a > b || c === 10) {
//     // ...
// }



