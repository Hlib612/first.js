// 1
// 1.перетвори масив у рядок, без роздільників,
// 2.поверни кількість символів в отриманому рядку.
// ["Mango", "hurries", "to", "the", "train"] повертає 22
// ["M", "a", "n", "g", "o"] повертає 5
// ["top", "picks", "for", "you"] повертає 14

// const arr = ["Mango", "hurries", "to", "the", "train"];
// const arr1 = ["M", "a", "n", "g", "o"];
// const arr2 = ["top", "picks", "for", "you"];
// const string1 = arr.join(" ");
// console.log(string1);
// console.log(string1.length - 4);
// const string2 = arr1.join("");
// console.log(string2);
// console.log(string2.length);
// const string3 = arr2.join("");
// console.log(string3);
// console.log(string3.length);

// 2
// є рядок, що склад зі слів, розділених лише пробілами <message> 
// та  число, що містить ціну <pricePerWord >
// напиши код, що рахує загальну вартість гравірування слів в рядку

// "JavaScript is in my blood", 10 повертає 50
// "Web-development is creative work", 20 повертає 80


// const text = "JavaScript is in my blood";
// const pricePerWord = 10;
// const words = text.split(" ")
// console.log(words);
// console.log(words.length);
// const price = words.length * pricePerWord;
// console.log(price);

// const text1 = "Web-development is creative work";
// const pricePerWord1 = 20;
// const words1 = text1.split(" ")
// console.log(words1);
// console.log(words1.length);
// const price1 = words1.length * pricePerWord;
// console.log(price1);

// 3
// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код , щоб перевіряти, чи присутній такий товар в масиві storage
// і повертати:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру
// ["apple", "plum", "pear"], "plum" повертає "plum is available to order!"
// ["apple", "plum", "pear"], "pEAr" повертає "pear is available to order!"
// ["apple", "plum", "pear"], "orange" повертає "Sorry! We are out of stock!"

// const storage = ["apple", "plum", "pear"];
// const item = prompt();
// const itemT = item.toLowerCase();
// if (storage.includes(itemT)){
//     alert(`${itemT} is available to order!`);
// } else {
//     alert("Sorry! We are out of stock!!");
// }