// 1. Напишіть скрипт зміни кольору кнопки при натискані на неї.
const colorsArr = ["red", "green", "blue", "yellow", "orange", "pink"];

// 2. Напиши скрипт реалізації додавання класу до заголовка при кліку на кнопку ‘Додати стилі’.

const changeColorButton = document.querySelector(".js-btn");
const onButtonChangeColorClick = (event) => {
  console.log("Click");
  changeColorButton.style.backgroundColor =
    colorsArr[Math.round(Math.random() * (colorsArr.length - 1) + 1)];
};
changeColorButton.addEventListener("click", onButtonChangeColorClick);

const ButtonAddClassClick = document.querySelector(".js-add-style-btn");
const ButtonAddClassClickText = document.querySelector(".text");
const onButtonAddClassClick = (event) => {
  if (ButtonAddClassClickText.classList.contains("new")) {
    ButtonAddClassClickText.classList.remove("new");
  } else {
    ButtonAddClassClickText.classList.add("new");
  }
};
ButtonAddClassClick.addEventListener("click", onButtonAddClassClick);

// 4. Створити форму, після сабміту виводити на екран
// повідомлення ‘Ви зареєструвалися успішно! Дякую!’

const formElement = document.querySelector(".form");
// const greating = document.querySelector(".greating");
const messageEl = document.querySelector(".greating");

const formHandler = (event) => {
  event.preventDefault();
  console.log("Ви зареєструвалися успішно! Дякую!");
  const { name, surname } = event.currentTarget.elements;
  console.log(name);
  console.log(surname);
  messageEl.textContent = `Ви зареєструвалися успішно! ${name.value} ${surname.value} Дякую!`;
  formElement.reset();
  setTimeout(() => (messageEl.style.display = "block"), 500);
  setTimeout(() => (messageEl.style.display = "none"), 3500);
};

formElement.addEventListener("submit", formHandler);
