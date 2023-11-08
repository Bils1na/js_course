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

/*
5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
*/

const el = document.querySelector("[id=\"dropdownMenuButton\"]").id = "superDropdown";


  /*
  6. Добавьте атрибут data-dd со значением 3 элементу у которого существует
  атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
   */

const el1 = document.querySelector("[aria-labelledby=\"dropdownMenuButton\"");
el1.dataset.dd = 3;


  /*
  7. Удалите атрибут type у элемента с классом "dropdown-toggle".
   */

const el2 = document.querySelector(".dropdown-toggle");
el2.removeAttribute("type");


  /*
  8. Выведите в консоль все имеющиеся атрибуты и их значения тега у которого
  есть все два класса btn и dropdown-toggle.
  Вывод каждого атрибута и значений должен выглядеть следующим образом (пример):
  Атрибут "class" содержит значение "btn btn-secondary dropdown-toggle"
   */

const el3 = document.querySelector(".btn.dropdown-toggle").attributes;
for (const element of el3) {
  console.log(`
  ${element.name} - ${element.value}
  `);
}