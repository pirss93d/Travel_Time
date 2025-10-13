const express = require("express"); // подключение   веб-фреймворк Express.
const app = express(); // app — это приложение Express, которое обрабатывает GET-запросы к корню / и отвечает текстом.
const bot = require("./bot"); // импортируем  бота
const fs = require("fs"); //Модуль fs предоставляет API для работы с файловой системой
const subscribersFile = "./subscribers.json";

//Поптыка реализации PINCODE
const users = [
  //PIN=code rub text
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];
//END PINCODE
let subscribers = new Set();
if (fs.existsSync(subscribersFile)) {
  const saved = JSON.parse(fs.readFileSync(subscribersFile));
  subscribers = new Set(saved);
}
function broadcastMessage(text) {
  subscribers.forEach((chatId) => {
    bot.telegram.sendMessage(chatId, text).catch(console.error);
  });
}

app.use(express.static("public")); //директива в Express.js, которая подключает встроенный middleware для обслуживания статических файлов из папки
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/new-application", (req, res) => {
  const { address, data, time, passenger, message, email } = req.body;
  const text = `Новая заявка! 🚀\nАдрес: ${address}\nДата: ${data} Время: ${time}⌚\nПасажиров: ${passenger}\nСообщение: ${message}💭\nEmail: ${email}`;

  broadcastMessage(text);

  res.json({ status: "OK", message: "Заявка принята ✅" });
});

app.listen(3000, () => console.log("Сервер запущен на http://localhost:3000"));
