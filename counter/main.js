"use strict";

const btnsList = document.querySelectorAll("button");
const countNumber = document.querySelector(".count-number");
console.log(btnsList);

btnsList.forEach((btn) => {
  if (btn.classList.contains("decrease")) {
    btn.addEventListener("click", () => {
      countNumber.innerText = Number(countNumber.innerText) - 1;
      if (countNumber.innerText < 0) {
        countNumber.style.color = "crimson";
      }
    });
  } else if (btn.classList.contains("increase")) {
    btn.addEventListener("click", () => {
      countNumber.innerText = Number(countNumber.innerText) + 1;
      if (countNumber.innerText > 0) {
        countNumber.style.color = "#20c997";
      }
    });
  } else if (btn.classList.contains("reset")) {
    btn.addEventListener("click", () => {
      countNumber.innerText = 0;
      if (countNumber.innerText == 0) {
        countNumber.style.color = "#000";
      }
    });
  }
});
