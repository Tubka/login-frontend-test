const btn = document.querySelector(".login__btn");
const register = document.querySelector(".register");
const form = document.querySelector(".login__form");

btn.addEventListener(
  "click",
  (clear = e => {
    e.preventDefault();
    register.classList.add("clear");
    form.classList.add("clear");
  })
);
