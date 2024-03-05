const primaryNav = document.querySelector(".primary-navigation");
const navOpen = document.querySelector(".mobile-nav-open");
const navClose = document.querySelector(".mobile-nav-close");
const body = document.querySelector("body");

console.log(body);

navOpen.addEventListener("click", () => {
  primaryNav.setAttribute("data-visible", true);
  body.setAttribute("data-backdrop", true);

  console.log(body.getAttribute("data-backdrop"));
});

navClose.addEventListener("click", () => {
  primaryNav.setAttribute("data-visible", false);
  body.setAttribute("data-backdrop", false);

  console.log(body.getAttribute("data-backdrop"));
});
