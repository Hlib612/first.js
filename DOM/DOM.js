// //  - Отримайте доступ до списку
// const navListEl = document.querySelector(".site-nav");
// console.log(navListEl);
// const navLinkEl = document.querySelector(".site-nav a")
// console.log(navLinkEl);
// //  - Додайте жовтий колір фону
// navListEl.style.backgroundColor = "yellow";
// navListEl.firstElementChild.style.backgroundColor = "red";
// const linkEl = document.querySelector(".site-nav > li > a[href='https://']");
// linkEl.style.fontStyle = "italic";
// console.log(linkEl);
// //  - Додайте клас "site-nav__link" до першого посилання
// //  - Збільшіть розмір шрифта посилання з атрибутом href = "https://"
// linkEl.classList.add("crazy")

// const colorPickerOptions = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'grey', color: '#607D8B' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F51B5' },
//   ];

//   const containerEl = document.querySelector(".js-color-picker");
// console.log(containerEl);
// const items = colorPickerOptions.map(option => {
//     console.log(option);
//     const button = document.createElement("button");
//     button.textContent = option.label;
//     button.classList.add('color-picker__option');
//     button.style.backgroundColor = option.color;
//     console.log(button);
//     return button;
// });
// console.log(items);
// containerEl.append(...items);

// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');

// const markup = technologies
//   .map(technology => `<li class="list-item">${technology}</li>`)
//   .join('');

// // додаємо в список
// list.innerHTML = markup;

// const markup = colorPickerOptions.map(option => {
//   return `<button class="colorPickerOption" style="background-color: ${option.color};">${option.label}</button>`
// }).join("")

// containerEl.innerHTML = markup;

// console.log(markup);




//? 1.Написати функцію яка буде створювати карточку продукту.
//? Додати карточку в DOM за допомогою методу createElement
{
  /* <article class="product">
        <h2 class="product__name">Назва</h2>
        <p class="product__descr">Опис</p>
        <p product__pridct>Ціна: 1111 кредитів</p>
    </article>
    <div class="js-products"></div> */
}

const productContainer = document.querySelector(".js-product");
console.log(productContainer);
const article = document.createElement("article");
console.log(article);
productContainer.append(article);

// 2 спосіб innerHTML
const cardContent = ` <h2 class="product__name">Назва</h2>
        <p class="product__descr">Опис</p>
        <p product__pridct>Ціна: 1111 кредитів</p> `;

        article.innerHTML = cardContent;

// 3 спосіб elem.insertAdjacentHTML(position, string);
article.insertAdjacentHTML("afterbegin" , cardContent);
