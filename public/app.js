//Функция для кнопки заказать по булевому значению.
let isOpen = false;
const btn = document.querySelector(".main_order");
const btn_on = document.querySelector(".btn_order");
const btn_push = document.querySelector("#form_btn-push");
//
const block_help = document.querySelector(".main_block-helper");
const btn_helper = document.querySelector(".main_help");
let isOpen_help = false;

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
document
  .getElementById("form_one")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/new-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message || "Заявка успешно отправлена!");
        this.reset();
      } else {
        alert(result.message || "Ошибка отправки заявки");
      }
    } catch (error) {
      alert("Ошибка сети");
    }
  });
