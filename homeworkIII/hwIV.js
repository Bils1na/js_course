// Обязательное задание.

// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна
// фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене,
// начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести
// отсортированный массив в консоль.

"use strict";

const products = [
    {
        id: 3,
        price: 127,
        photos: [
        "1.jpg",
        "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
        "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

for (const key in products) {
    if (typeof products[key].photos !== "undefined" 
    && products[key].photos.length !== 0) {
        console.log(products[key].photos);
    }
}
