import data from "./data.json" assert { type: "json" };

const summaryCards = document.querySelectorAll(".values");
const summaryCardsCategory = document.querySelectorAll(".category");

summaryCards.forEach((card, i) => {
  card.textContent = data[i].score;
  summaryCardsCategory[i].textContent = data[i].category;
});
