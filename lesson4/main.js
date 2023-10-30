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

// function toBeep() {
//     console.log(`${this.model}: Beep!`);
// }

// function Car(model) {
//     // this = {};
//     // this.__proto__ = Car.prototype;
//     this.model = model;
//     // this.beep = function () {
//     //     console.log(`${this.model}: Beep!`);
//     // };

//     // return this;
// }

// // console.log(Car.prototype);
// Car.prototype.wheelsCount = 4;
// Car.prototype.beep = function () {
//         console.log(`${this.model}: Beep!`);
//     };

// const car1 = new Car("BMW");
// const car1 = new Car("Toyota");

// car1.beep();
// car2.beep();

// function Person(name, sex) {
//     this.name = name;
//     this.sex = sex;
// }

// Person.prototype.callName = function () {
//     console.log(`My name is ${this.name}`)
// }

// // const person1 = new Person("Pavel", "male");
// // person1.callName();

// function Employee(name, sex, position) {
//     // this.name = name;
//     // this.sex = sex;
//     Person.call(this, name, sex);
//     this.position = position;
// }

// // { sayPosition: f(), __proto__: Person.prototype }
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// // Employee.prototype.callName = function () {
// //     console.log(`My name is ${this.name}`)
// // }

// Employee.prototype.sayPosition = function () {
//     console.log(`My position is ${this.position}`)
// }

// const employee1 = new Employee("Pavel", "male", "mover");
// employee1.callName();
// employee1.sayPosition();

// []
// Array.prototype.hello = function () {
//     console.log("Hello");
// };

class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }
}

class Employee extends Person {
    constructor(name, sex, position) {
        super(name, sex);
        this.position = position;
    }

    sayPosition() {
        console.log(`My position is ${this.position}`);
    }
}
