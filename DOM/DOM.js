//  - Отримайте доступ до списку
const navListEl = document.querySelector(".site-nav");
console.log(navListEl);
const navLinkEl = document.querySelector(".site-nav a")
console.log(navLinkEl);
//  - Додайте жовтий колір фону
navListEl.style.backgroundColor = "yellow";
navListEl.firstElementChild.style.backgroundColor = "red";
const linkEl = document.querySelector(".site-nav > li > a[href='https://']");
linkEl.style.fontStyle = "italic";
console.log(linkEl);
//  - Додайте клас "site-nav__link" до першого посилання
//  - Збільшіть розмір шрифта посилання з атрибутом href = "https://"