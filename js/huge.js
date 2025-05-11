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


const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner:{
        name: "Henry",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com",
    },
    changePrice(newPrise){
        this.price = newPrise;
        return `Prise changed to ${this.price}`;
    },
    isGood(){
        if(this.rating > 8){
            return true;
        } else {
            return false;
        }
    },
    addNewTag(newTag){
        this.tags.push(newTag);
    }
}
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
  remove(productName) {
    for(let i = 0; i< this.items.length; i += 1){
        if(this.item[i].name === productName){
            console.log(`Found ${productName}`)
            this.item.splice(1, 1)
        }
    }
    return "This prodfdkfkmfk"
  },
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};
// console.log(cart.getItems());
// console.table(cart.getItems());

// console.log(cart.add({ name: '🍎', price: 50 }));
// console.log(cart.add({ name: '🍇', price: 70 }));
// console.log(cart.add({ name: '🍋', price: 60 }));
// console.log(cart.add({ name: '🍓', price: 110 }));
// console.table(cart.getItems());

// console.log(cart.getItems());
// console.log(cart.add({ name: '🍓', price: 110 }));
// console.table(cart.getItems());

// console.log(cart.remove('🍋'));
// console.table(cart.getItems());

// const {items} = cart;

// const valuess = [];

// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys){
//   valuess.push(apartment[key]);
// }
// console.log(valuess);

// const valuess = Object.values(apartment);
// console.log(valuess);

// const enteries = Object.enteries(apartment);
// console.log(enteries);


// 1
// Масив colors містить колекцію кольорів.
// Кожен колір представлений об'єктом і має властивості
// hex і rgb з відповідними для цього формату і кольору значеннями.

// Перебери масив об'єктів colors, використовуючи цикл for...of.
// Додай у масив hexColors значення властивостей hex,
// а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for(const color of colors){
//   rgbColors.push(color.rgb);
//   hexColors.push(color.hex);
// }
// console.log(hexColors);
// console.log(rgbColors);


// 2
// Доповни код функції так, щоб вона шукала об'єкт продукту
// з певним ім'ям (властивість name) в масиві products і
// повертала його ціну (властивість price).
// Якщо продукт з такою назвою не знайдений повертати null.
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// const productName = "Radar";

// const getProductPrice = (productName) => {
//   for(const product of products){
//     console.log(product.name)
//     if(product.name === productName){
//       return product.price;
//     }
//   }
//   return null;
// }
// // console.log(getProductPrice("Radar"));



// // 0
// // Скопіювати масив викор розпорошення 
// const numberss = [1, 2, 3, 54, 12];
// // Скопіювати обєкт викор розпорошення 
// const apartment1 = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const apartment1Copy = {
//   ...apartment1
// }
// console.log(apartment1Copy)


// Функція getExtremeScores(scores) 
// приймає масив оцінок (чисел) у параметрі scores.
// вона повертала об'єкт із двома властивостями:
// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min().

// const getExtremeScores = (scores) =>{
//   const maxScore = Math.max(...scores);
//   const msnScore = Math.min(...scores);

//   const score = {
//     best: maxScore,
//     worst: msnScore,
//   }
//   return score
// }



// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])) //{ best: 93, worst: 17 }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24])) //{ best: 81, worst: 4 }


// Використовуючи синтаксис залишкових параметрів, 
// створи функцію add() так, 
// щоб вона приймала будь-яку кількість аргументів у параметр args
//  і повертала їхню суму

// const add = (...args) =>{
//   let total = 0;
//   for(const num of args){
//      total += num;
//   }
//   return total;
// }


// console.log(add(12, 4, 11, 48)) // 75
// console.log(add(32, 6, 13, 19, 8)) // 78



// // Об’єкт user
// const user = {
//   name: 'John',
//   age: 30,
//   email: 'john@example.com'
// }

// const{name = "User", age = 31, email: userEmail = "none@gmail.com",} = user;
// console.log(name, age, userEmail)



// // Об’єкт movie
const movie = {
  title: 'The Shawshank Redemption',
  director: {
    name: 'Frank Darabont',
    nationality: 'American'
  },
  actors: ['Tim Robbins', 'Morgan Freeman'],
  release_year: 1994,
  ratings: {
    imdb: 9.3,
    rotten_tomatoes: 90
  }
}




// const {title, director: {name: directorName, nationality: directorNationality}, actors:[actorTim, actorMorgan], ratings: {imdb, rotten_tomatoes}} = movie;
// console.log(title, directorName, directorNationality, actorTim, actorMorgan , imdb, rotten_tomatoes)


// // Об’єкт books
const books = {
  count: 3,
  list: [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960
    },
    {
      title: '1984',
      author: 'George Orwell',
      year: 1949
    }
  ]
}


// const{count, list: [{title, author, year}, killBook, _1984]} = books;
// console.log(count, title, author, year, killBook, _1984);



// Дано масив об’єктів
const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];

// Написати функція яка буде отримувати масив
// та ім’я друга якого потрібно знайти

const findFriendByName =(arr, nameToFind) =>{
for( const {name} of friends){
  if(name === nameToFind){
    return "Found a friend"
  }
}
return "Doesnt find friend"
}

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// Написати функцію яка буде повертати масив всіх імен друзів
// console.log(getAllNames(friends));
// function getAllNames (friends) {
//     const names = [];
//     for (const friend of friends){
//         names.push(friend.name)
//     }
//     return names;
// }
// Написати функ,яка буд
// Написати функ,яка буде повертати масив імен друзів які онлайн
// console.log(getOnlineFriends(friends));

// Написати функцію яка буде повертати масив імен друзів які офлайн
// console.log(getOfflineFriends(friends));

// function getOnlineFriends (friends) {
//     const onlineFriendsName = [];
//     for (const friend of friends) {
//         if (friend.online) {
//             onlineFriendsName.push(friend.name);
//         }
//     }
//     return onlineFriendsName
// }
// console.log(getOnlineFriends(friends));

// function getOfflineFriends (friends) {
//     const offlineFriendsName = [];
//     for (const {online, name} of friends) {
//         if (!online) {
//             offlineFriendsName.push (name);
//         }
//     }
//     return offlineFriendsName;
// }

// console.log(getOfflineFriends(friends));










const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// Використовуючи 👆 масив об’єктів виконай наступні завдання:
//map()
// Отримати масив імен всіх гравців

const playerName = players.map(({name}) => name);
// console.log(playerName)
// Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)



//* Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)

const playerPoints = players.map((player) => {
  return { ...player, points: player.points * 1.1 };
});
// console.log(playerPoints);

const playerPoint = players.map(({points}) => points + points/10);
// console.log(playerPoint)


// Збільшити кількість годин гравця по id. Переписати на тернарник

const ubdatedPlayerHours = players.map((player) => {
  if(player.id === 'player-2'){
    // player.timePlayed = player.timePlayed + 100;
    return {...player, timePlayed: player.timePlayed + 100,};
  }
  return player;
})
// console.log(ubdatedPlayerHours);
// console.log(players);

//filter()
// Отримати масив всіх гравців онлайн

const playersOnline = players.filter((player) => player.online);
// console.log(playersOnline)
// Отримати масив всіх гравців офлайн

const playersOfline = players.filter((player) => !player.online);
// console.log(playersOfline)
// Отримати масив всіх хардкорних гравців з часом більше 250
//Find()
const bestPlayers = players.filter((player) => player.timePlayed > 250);
// console.log(bestPlayers)
// Знайти гравця по id


const playerById = players.find((player) => (player.id === "player-2"));
// console.log(playerById);
// Знайти гравця по імені
const playerByName = players.find((player) => (player.name === 'Kiwi'));
// console.log(playerByName);
//every()
// Перевірити чи всі гравці мають час більше 200
const everyTime = players.every((player) => (player.timePlayed >= 200));
// console.log(everyTime);
// Перевірити чи всі гравці онлайн
const playersAreActive = players.every((player) => (player.online === true));
// console.log(playersAreActive);



const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.sort((a, b) => a - b);
// console.log(ascendingScores);
const scores1 = [61, 19, 74, 35, 92, 56];
const descendingScores = scores1.sort((a, b) => b - a);
// console.log(descendingScores);


const students1 = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

const inAlphabetOrder = students1.sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); 

const inReversedOrder = students1.sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder);


const totalTimePlayed = players.reduce((acc, player) => (player.timePlayed + acc), 0);
console.log(totalTimePlayed)

const sortedPlayers = players.sort((previousPlayer, nextPlayer) => previousPlayer.points - nextPlayer.points)
console.log(sortedPlayers)