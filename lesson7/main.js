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

const arr1 = [1, 5, 6];
const arr2 = [100, ...arr1];

// for (let i = 0; i < arr1.length; i++) {
//     arr2.push(arr1[i]);
// }