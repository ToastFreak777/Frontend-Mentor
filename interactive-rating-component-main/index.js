const ratingForm = document.querySelector(".rating-form");
const ratingsBtn = document.querySelectorAll(".rating-form__rating");
const submitBtn = document.querySelector(".btn");

const thankYouCard = document.querySelector(".thank-you-card");
const selectedRating = document.querySelector(".thank-you-card__rating");

let selectedBtn = null;

ratingsBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (selectedBtn) selectedBtn.classList.toggle("active");

    e.target.classList.toggle("active");
    selectedBtn = e.target;
    selectedRating.innerText = e.target.innerText;
  });
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!selectedRating.innerText) {
    alert("Please select a rating");
    return;
  }

  ratingForm.classList.toggle("hidden");
  thankYouCard.classList.toggle("hidden");
});
