//Функция для кнопки заказать по булевому значению.
let isOpen = false;
const btn = document.querySelector(".main_order");
const btn_on = document.querySelector(".btn_order");
const btn_push = document.querySelector("#form_btn-push");

// btn.addEventListener("click", function () {
//   if (!isOpen) {
//     btn_on.style.display = "block";
//     btn.textContent = "Свернуть";
//     isOpen = true;
//   } else {
//     btn_on.style.display = "none";
//     btn.textContent = "Заказать";
//     isOpen = false;
//   }
// });

btn.addEventListener("click", function () {
  if (!isOpen) {
    btn_on.style.display = "flex";
    btn.textContent = "Свернуть";
    isOpen = true;
  } else {
    btn_on.style.display = "none";
    btn.textContent = "Заказать";
    isOpen = false;
  }
});
