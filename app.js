const inputEl = document.querySelector(".input_mail");
const btn = document.querySelector(".arrow_btn");
const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const ErrorImg = document.querySelector(".img_error");
const ErrorText = document.querySelector(".text-error");
let errors = [];

btn.addEventListener("click", (e) => {
  ErrorText.classList.remove("text-success");
  errors = [];
  e.preventDefault();
  const email = inputEl.value;

  if (email == "" || email === undefined) {
    errors.push("Please provide us your email");
    ErrorImg.style.display = "block";
    ErrorText.innerHTML = errors[0];
    ErrorText.style.color = "red";
  } else if (!email.match(RegEmail)) {
    errors.push("Please provide us your valid email");
    ErrorImg.style.display = "block";
    ErrorText.innerHTML = errors[0];
    ErrorText.style.color = "red";
  }

  if (!errors.length > 0) {
    ErrorImg.style.display = "none";
    ErrorText.classList.add("text-success");
    ErrorText.innerText = "Thank you for subscribing to our newsletter.";
  }
});
