const annualPrices = document.querySelectorAll(".annual");
const monthlyPrices = document.querySelectorAll(".monthly");

const togglePrices = document.querySelector("#check");

console.log(annualPrices, monthlyPrices);

togglePrices.addEventListener("change", () => {
  console.log(togglePrices.checked);

  monthlyPrices.forEach((price) => price.classList.toggle("hidden"));
  annualPrices.forEach((price) => price.classList.toggle("hidden"));
});
