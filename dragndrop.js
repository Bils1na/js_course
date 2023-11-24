"use strict";

const dragContainer = document.querySelector(".draggable_elements_container");
const dropContainer = document.querySelector(".drop_container");

// Array.from(dragContainer.children);
[...dragContainer.children].forEach(el => el.draggable = true);

dragContainer.addEventListener("dragstart", event => {
    event.target.classList.add("dragged");
});

