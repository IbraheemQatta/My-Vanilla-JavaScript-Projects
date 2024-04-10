"use strict";

const generatorBtn = document.querySelector(".generate-btn");
const backgroundApply = document.querySelector(".color-flipper");
const codeText = document.querySelector(".color-code");

// the first way
// =============
// const randomColor = () => {
//   let randomNumbers = Math.random().toString(16).slice(2, 8);
//   return randomNumbers;
// };

// const generateFunction = () => {
//   let newColorCode = randomColor();
//   backgroundApply.style.backgroundColor = "#" + newColorCode;
//   codeText.innerText = "#" + newColorCode;
// };
// generatorBtn.addEventListener("click", generateFunction);

// the second way
// ==============
// const colorCharacter = [
//   "0",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
// ];

// const theRandom = () => {
//   return Math.floor(Math.random() * 16);
// };

// const generatorFunction = () => {
//   let colorCodeLength = 6;
//   let colorCode = "#";
//   for (let char = 0; char < colorCodeLength; char++) {
//     colorCode += colorCharacter[theRandom()];
//   }
//   backgroundApply.style.backgroundColor = colorCode;
//   codeText.textContent = colorCode;
// };

// generatorBtn.addEventListener("click", generatorFunction);

// the Third way (rgb color)
// ========================

const randomRgb = () => {
  const redValue = Math.floor(Math.random() * 255);
  const greenValue = Math.floor(Math.random() * 255);
  const blueValue = Math.floor(Math.random() * 255);
  const colorValue = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  return colorValue;
};

const generatorFunction = () => {
  const colorCode = randomRgb();
  backgroundApply.style.backgroundColor = colorCode;
  codeText.textContent = colorCode;
};

generatorBtn.addEventListener("click", generatorFunction);

codeText.addEventListener("click", () => {
  navigator.clipboard.writeText(codeText.textContent);
});
