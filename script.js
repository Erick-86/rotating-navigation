"use strict";

const showNavBtn = document.getElementById("open");
const closeNavBtn = document.getElementById("close");
const contentContainer = document.querySelector('.content-container')

showNavBtn.addEventListener('click', () => {
    contentContainer.classList.add('show-nav')
})

closeNavBtn.addEventListener("click", () => {
  contentContainer.classList.remove("show-nav");
});
