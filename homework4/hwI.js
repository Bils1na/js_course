// Обязательное задание.

// Необходимо данное задание выполнить в es5 стиле и в es6 стиле.
// Необходимо создать функцию-конструктор/класс для продукта.
// Названия: `ProductES5` для es5 стиля, `ProductES6` для es6 стиля.
// При создании объекта от функции-конструктора/класса необходимо передавать имя
// и цену товара, эта информация должна быть сохранена в объекте.
// Также у объекта должна быть возможность выполнить метод `make25Discount`, данный
// метод должен уменьшать стоимость продукта на 25%.
// Необходимо продемонстрировать работу с объектом (в свободной форме).

"use strict";

// es5

function ProductES5(name, price) {
    this.name = name;
    this.price = price;
}

ProductES5.prototype.make25Discount = function () {
    this.price *= 0.75;
};

const productES5 = new ProductES5("bacon", 150);
console.log(productES5);
productES5.make25Discount();
console.log(productES5);

// es6

class ProductES6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25Discount() {
        this.price *= 0.75;
    }
}

const productES6 = new ProductES6("bacon", 150);
console.log(productES6);
productES6.make25Discount();
console.log(productES6);