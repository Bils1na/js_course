// Необязательное задание.

// Необходимо вывести горку в консоль (используя цикл for), как показано на
// рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// ```
// x
// xx
// xxx
// xxxx
// xxxxx
// ```

// Примечание: в трех косых кавычках ``` показан пример кода для вывода, вам эти
// кавычки выводить не нужно.

let str = "";

for (let index = 0; index < 20; index++) {
    str += "x";
    console.log(str);
}
