"use strict";

/*
  1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс
  "super-dropdown", необходимо использовать методы forEach и querySelectorAll и
  свойство classList у элементов.
   */

const dropdownEls = document.querySelectorAll(".dropdown-item");
dropdownEls.forEach(function(el) {
    el.classList.add("super-dropdown");
});

console.log(dropdownEls);

/*
  2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он
  присутствует у этого элемента, либо добавить, если такого класса у элемента
  не было.
   */

const btnEls = document.querySelector(".btn");
btnEls.classList.toggle("btn-secondary");

/*
  3. Необходимо удалить класс "dropdown-menu" у элемента, у которого
  присутствует класс "menu".
   */
const menuEl = document.querySelector(".menu").classList.remove("dropdown-menu");

/*
  4. Используя метод insertAdjacentHTML добавьте после div'a с классом
  "dropdown" следующую разметку:
    <a href="#">link</a>
   */

document.querySelector("div.dropdown")
        .insertAdjacentHTML("afterend", "<a href=\"#\">link</a>");
