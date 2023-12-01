"use strict";

// let a;
// let b =  a ?? 5;
// console.log(b);

let x;
let y =2;
x ??= y; // x = x ?? y;

const obj = {
    prop1: "asd",
    prop2: {
        name: "asd",
        age: 123,
        obj: {
            zxc: "123",
            asd: "asd",
            qwe: {
                hello: 5,
            },
        },
    },
};