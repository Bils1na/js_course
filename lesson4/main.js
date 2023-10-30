"use strict";

// const obj = {
//     a: 1,
//     __proto__: {
//         b: 2,
//         c: 3,
//         __proto__: {
//             z: 4,
//             __proto__: null
//         },
//     },
// };

// console.log(obj.a); //1
// console.log(obj.c); //3
// console.log(obj.z); //4
// console.log(obj.asd); //undefined

// function toBeep() {
//     console.log(`${this.model}: Beep!`); 
// }

// const myCar = {
//     model: "BMW",
//     // beep: function () {
//     //   console.log("Beep!");  
//     // },
//     // beep() {
//     //     console.log(`${this.model}: Beep!`); 
//     //   },
//     beep: toBeep,
// };

// const myCar2 = {
//     model: "Toyota",
//     // beep: function () {
//     //   console.log("Beep!");  
//     // },
//     // beep() {
//     //     console.log(`${this.model}: Beep!`);  
//     //   },
//     beep: toBeep,
// };

// myCar.beep();
// myCar2.beep();

function toBeep() {
    console.log(`${this.model}: Beep!`);
}

function Car(model) {
    // this = {};
    // this.__proto__ = Car.prototype;
    this.model = model;
    // this.beep = function () {
    //     console.log(`${this.model}: Beep!`);
    // };

    // return this;
}

// console.log(Car.prototype);
Car.prototype.wheelsCount = 4;
Car.prototype.beep = function () {
        console.log(`${this.model}: Beep!`);
    };

const car1 = new Car("BMW");
const car1 = new Car("Toyota");

car1.beep();
car2.beep();
