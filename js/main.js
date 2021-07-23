"use strict";


const moreButton = document.querySelector(".more__btn");

// click more button open 1  2 3 modal window

moreButton.addEventListener("click", function () {
    const modal = document.querySelector(".modal");
    modal.classList.add("modal--visible");
});

//new Theme("html");

// DOM manipulation helper functions
function select(item) {
    return document.querySelector(item);
}

function selectAll(item) {
    return document.querySelectorAll(item);
}

function create(element) {
    return document.createElement(element);
}

function cl(item) {
    console.log(item);
}

function cd(item) {
    console.dir(item);
}
