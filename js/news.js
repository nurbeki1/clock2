const menu = document.querySelector("#menu");
const btn = document.querySelector("#btn_burger");
const btnImg = document.querySelector("#burgerImg");

menu.addEventListener("click", function () {
  console.log("asdfa");

  if (menu.classList.toggle("open")) {
    btnImg.src = "/photos/close.png";
  } else {
    btnImg.src = "/photos/open.png";
  }
});
