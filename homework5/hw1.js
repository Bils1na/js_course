"use strict";

// Обязательное задание.

// Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не
// стирать, код с решением задачи пишем под комментарием.

/*
  1. Найти по id, используя getElementById, элемент с id равным "super_link" и
  вывести этот элемент в консоль.
   */

const superLinkEl = document.getElementById("super_link");
console.log(superLinkEl);

/*
  2. Внутри всех элементов на странице, которые имеют класс "card-link",
  поменяйте текст внутри элемента на "ссылка".
   */

const cardLinkEls = document.getElementsByClassName("card-link");

for (let index = 0; index < cardLinkEls.length; index++) {
    const element = cardLinkEls[index];
    element.textContent = "ссылка";
}

/*
  3. Найти все элементы на странице с классом "card-link", которые лежат в
  элементе с классом "card-body" и вывести полученную коллекцию в консоль.
   */

const bodyEls = document.querySelectorAll(".card-body .card-link");
console.log(bodyEls);

/*
  4. Найти первый попавшийся элемент на странице у которого есть атрибут
  data-number со значением 50 и вывести его в консоль.
   */

const dataNumberEl = document.querySelector("[data-number=\"50\"]");
console.log(dataNumberEl);

/*
  5. Выведите содержимое тега title в консоль.
   */

const title = document.querySelector("title");
console.log(title.textContent);
console.log(document.title);

/*
  6. Получите элемент с классом "card-title" и выведите его родительский узел
  в консоль.
   */

const cardTitleEl = document.querySelector(".card-title");
console.log(cardTitleEl.parentNode);

/*
  7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный
  тег в начало элемента, который имеет класс "card".
   */

const pTag = document.createElement("p");
pTag.textContent = "Hello";

document.querySelector(".card").prepend(pTag);

/*
  8. Удалите тег h6 на странице.
   */

document.querySelector("h6").remove();