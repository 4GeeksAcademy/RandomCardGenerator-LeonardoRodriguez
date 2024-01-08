/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  document
    .querySelector("#generateCardButton")
    .addEventListener("click", () => {
      generateRandomCard();
    });
};

let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let types = ["♦", "♥", "♠", "♣"];

function generateRandomCard() {
  let randomNumber = numbers[Math.floor(Math.random() * 13)];
  let cardNumber = document.getElementById("cardNumber");
  cardNumber.innerHTML = randomNumber;

  let randomType = types[Math.floor(Math.random() * 4)];
  let cardType = document.getElementById("cardType");
  cardType.innerHTML = randomType;
  let reverseCardType = document.getElementById("reverseCardType");
  reverseCardType.innerHTML = randomType;

  if (randomType === "♦" || randomType === "♥") {
    cardType.style.color = "red";
    reverseCardType.style.color = "red";
  } else if (randomType === "♠" || randomType === "♣") {
    cardType.style.color = "black";
    reverseCardType.style.color = "black";
  }
}
