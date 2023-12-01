"use strict";

// let a;
// let b =  a ?? 5;
// console.log(b);

// let x;
// let y =2;
// x ??= y; // x = x ?? y;

// const obj = {
//     prop1: "asd",
//     prop2: {
//         name: "asd",
//         age: 123,
//         obj: {
//             zxc: "123",
//             asd: "asd",
//             qwe: {
//                 hello: 5,
//             },
//         },
//     },
// };

// console.log(obj.prop2.obj?.qwe.hello);

// class A {
//     a() {
//         console.log("a");
//         return this;
//     }

//     b() {
//         console.log("b");
//         return this;
//     }
// }

// const obj = new A();
// obj.a().b().b().a().a().a().b();

// class User {
//     setName(name) {
//         this.name = name;
//         return this;
//     }

//     setSurname(surname) {
//         this.surname = surname;
//         return this;
//     }

//     setAge(age) {
//         this.age = age;
//         return this;
//     }
// }

// const user = new User();
// user.setName("Pavel");
// user.setSurname("Tarasov");
// user.setAge(25);

// user.setName("Pavel").setSurname("Tarasov").setAge(25);

// const arr1 = [1, 5, 6];
// const arr2 = [100, ...arr1];

// // for (let i = 0; i < arr1.length; i++) {
// //     arr2.push(arr1[i]);
// // }

// const obj1 = { a: 5, b: 6,
//     [Symbol.iterator]: function* () {
//         yield 5;
//         yield 20;
//     }, 
// };
// const obj2 = { asd: 100, ...obj1};


// for (const key in obj1) {
//     obj2[key] = obj1[key];
// }

// function fn(...rest) {
//     console.log(rest);
// }

// fn(...arr1);

// const arr1 = [1, 5, 6];
// // const a = arr1[0];
// // const b = arr1[1];

// const[a,, b] = arr1;
// console.log(a, b); // 1 6

// const obj1 = { a: 5, b: 6, c: 10 };
// const { a, c } = obj1;
// console.log(a, c) // 5 10

// let a = 5;
// let b = 10;
// [a, b] = [b, a];

// function fn({a, c: cParam = 100}) {
//     console.log(a, cParam);
// }

// fn(obj1); // 5 10

// document.querySelector("button").addEventListener("click", ({target}) => {
//     console.log(target.textContent);
// });

const btnEl = document.querySelector("button");
const a = 56;

const handler = (val) => (event) => {
    console.log(val);
};

const clickHandler = handler(a);

btnEl.addEventListener("click", clickHandler);
btnEl.removeEventListener("click", clickHandler);
