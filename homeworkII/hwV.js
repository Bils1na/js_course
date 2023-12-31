// Обязательное задание.

// Необходимо скопировать и вставить в данный скрипт все функции из 4 задания.
// Необходимо реализовать функцию:
// mathOperation(arg1, arg2, operation);
// Параметры:
// arg1 - первое число.
// arg2 - второе число.
// operation - строка, которая содержит один символ из: "+", "-", "*", "/".
// Функция mathOperation должна вернуть результат операции, который был передан в
// параметр operation для двух первых аргументов (arg1 и arg2).
// Функция mathOperation должна использовать для вычисления функции из 4 задания.

// Примеры вызова функции:
// console.log(mathOperation(5, 3, "+")); // 8
// console.log(mathOperation(5, 3, ":)")); // NaN

// Функции mathOperation всегда передаются корректные числа, проверки на NaN,
// Infinity делать не нужно, однако, в случае если был передан некорректный
// аргумент в параметр operation, необходимо вернуть NaN.

// Необходимо для всех функций прописать комментарии jsdoc https://jsdoc.app/.

"use strict";

function addition(a, b) {
    // 
    return a + b;
}

function subtraction(a, b) {
    // 
    return a >= b ? a - b : b - a;
}

function multiplication(a, b) {
    // 
    return a * b;
}

function divivsion(a, b) {
    // 
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "/":
            return divivsion(arg1, arg2);
        }
    return NaN;
}

console.log(mathOperation(5, 3, "+")); // 8
console.log(mathOperation(5, 3, ":)")); // NaN
