// const myObject = {
//     name: "Hlib",
//     age: 15,
//     ocupation: "student",
//     city: "Kyiv",
// }

// 1. 
//  Оголоси змінну apartment і задай ій об'єкт, 
// який описує квартиру з наступними характеристиками:

// descr - рядок, що містить опис, 
// значення "Spacious apartment in the city center";
// rating - число, що містить рейтинг, значення 4;
// price - число, що містить ціну, значення 2153;
// tags - масив рядків, що містить метаінформацію,
//  значення ["premium", "promoted", "top"].

// 2. 
// Доповни об'єкт квартири властивістю owner, 
// значенням якого буде об'єкт з інформацією про власника.
// Додай об'єкту owner наступні властивості:

// name - рядок, що містить ім'я власника, значення "Henry";
// phone - рядок, що містить номер телефону, значення "982-126-1588";
// email - рядок, що містить пошту, значення "henry.carter@aptmail.com"



// 3
// Доповни код, оновивши значення властивостей об'єкта apartment:

// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".


// 4
// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".

// Зверніть увагу: якщо ви спробуєте додати властивості country
//  і city до ще не створеної властивості location,
//  ви отримаєте помилку. 
// Спочатку ініціалізуйте location як порожній об'єкт, 
// а потім додавайте до нього властивості.


// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner:{
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
//     changePrice(newPrise){
//         this.price = newPrise;
//         return `Prise changed to ${this.price}`;
//     },
//     isGood(){
//         if(this.rating > 8){
//             return true;
//         } else {
//             return false;
//         }
//     },
//     addNewTag(newTag){
//         this.tags.push(newTag);
//     }
// }
// console.log(apartment.rating);
// console.log(apartment?.owner?.email);
// console.log(apartment["tags"].length);
// console.log(apartment["tags"][0]);
// console.log(apartment["tags"][apartment["tags"].length - 1]);

// // 3
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// console.log(apartment);

// // 4
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     ccountry: "Jamaica",
//     city: "Kingston",
// };
// console.log(apartment);



// // 5
// apartment.changePrice(7000)
// console.log(apartment);

// // 5
// console.log(apartment.changePrice(7000))
// // 6
// console.log(apartment.isGood())
// // 7
// apartment.addNewTag("best prise")
// console.log(apartment.tags);

// 8

// Працюємо з колекцією товарів в кошику:
// Написати методи вказані нижче в коді
// { name: '🍎', price: 50 }
// { name: '🍇', price: 70 }
// { name: '🍋', price: 60 }
// { name: '🍓', price: 110 }
const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
    return `the product ${product.name} was added`
  },
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};
console.log(cart.getItems());
console.table(cart.getItems());

console.log(cart.add({ name: '🍎', price: 50 }));
console.log(cart.add({ name: '🍇', price: 70 }));
console.log(cart.add({ name: '🍋', price: 60 }));
console.log(cart.add({ name: '🍓', price: 110 }));
console.table(cart.getItems());

console.log(cart.getItems());
// console.log(cart.add({ name: '🍓', price: 110 }));
// console.table(cart.getItems());

// console.log(cart.remove('🍋'));
// console.table(cart.getItems());