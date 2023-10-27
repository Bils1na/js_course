// Обязательное задание.

// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

"use strict";

for (let index = 0; index < 11; index++) {
    if (index === 0) {
        console.log(`${index} - this is null`);
    } else if (index % 2 === 1) {
        console.log(`${index} - this is odd number`);
    } else {
        console.log(`${index} - this is even number`);
    }
}