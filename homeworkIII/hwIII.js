// Обязательное задание.

// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя
// метод forEach.

"use strict";

const products = [
{
    id: 3,
    price: 200,
},
{
    id: 4,
    price: 900,
},
{
    id: 1,
    price: 1000,
},
];

products.forEach(function (product) {
    console.log(product.price * 0.85);
})
