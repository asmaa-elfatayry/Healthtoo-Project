let logbtn = document.getElementById("login");
let form = document.getElementById("form");
let layout = document.querySelector(".layout");
let closeBtn = document.querySelector(".close");
let subBtn = document.querySelector(".sub");
let sign = document.getElementById("signup");
let textCh = document.querySelector(".regis");
const email = document.getElementById("exampleInputEmail1");
const pass = document.getElementById("exampleInputPassword1");
logbtn.addEventListener("click", function (e) {
  e.preventDefault();

  form.style.display = "block";
  layout.style.display = "block";
  textCh.innerText = "Login Form";
});
closeBtn.addEventListener("click", function () {
  if (
    isEmail(email.value) &
    isPass(pass.value) &
    (email.value != "" && pass.value != "")
  ) {
    form.style.display = "none";
    layout.style.display = "none";
  } else {
    email.style.border = "2px solid #hsl(0,98%,66%)";
  }
});

subBtn.addEventListener("click", function () {
  if (
    isEmail(email.value) &&
    isPass(pass.value) &&
    email.value != "" &&
    pass.value != ""
  ) {
    form.style.display = "none";
    layout.style.display = "none";
  } else {
    email.style.border = "2px solid #hsl(0,98%,66%)";
  }
});

sign.addEventListener("click", function (e) {
  e.preventDefault();
  form.style.display = "block";
  layout.style.display = "block";
  textCh.innerText = "Register Form";
});

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPass(pass) {
  return /^[A-Za-z]\w{7,14}$/.test(pass);
}
