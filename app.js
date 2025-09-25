//Функция для кнопки заказать по булевому значению.
let isOpen = false;
const btn = document.querySelector(".main_order");
const btn_on = document.querySelector(".btn_order");
const btn_push = document.querySelector("#form_btn-push");

//
const block_help = document.querySelector(".main_block-helper");
const btn_helper = document.querySelector(".main_help");
let isOpen_help = false;

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

btn_helper.addEventListener("click", function () {
  if (!isOpen_help) {
    block_help.style.display = "flex";
    isOpen_help = true;
  } else {
    block_help.style.display = "none";
    isOpen_help = false;
  }
});

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // предотвращаем стандартную отправку

  const formData = new FormData(form);

  fetch("/submit", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        alert("Форма успешно отправлена!");
      } else {
        alert("Ошибка при отправке формы.");
      }
    })
    .catch(() => {
      alert("Ошибка сети или сервера.");
    });
});
