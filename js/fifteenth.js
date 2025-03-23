//      Задачка
/*створи функцію calculateTax, щоб вона повертала суму податку - результат множення суми на податкову ставку.
що приймає два параметри:
amount - число, сума від якої потрібно обчислити податок. 
Обов'язковий параметр.
taxRate - число, податкова ставка. Необов'язковий параметр. 
За замовчуванням його значення має бути 0.2.*/

// Виклик функції calculateTax(100, 0.1) повертає 10
// Виклик функції calculateTax(200, 0.1) повертає 20
// Виклик функції calculateTax(100, 0.2) повертає 20

// const calculateTax = function(amount = 1, taxRate = 0.2){
//     return amount * taxRate;
// }
// console.log(calculateTax(100, 0.1));
// console.log(calculateTax(200, 0.1));
// console.log(calculateTax(100, 0.2));


// 2. напиши функцію, яка буде перевіряти чи є продукт на складі
// приймає storage масив з продуктами та
// item продукт, який потрібно знайти.
// Використовуй пошук в масиві за доп методу includes
// якщо є товар повертати повідомлення 
// `${item} is available to order!`
// якщо немає  "Sorry! We are out of stock!";



// const storage = ["apple", "plum", "pear"];

// const checkStorage = function(storage, item){
//     let itemT = item.toLowerCase();
//     if(storage.includes(itemT)){
//         return `${itemT} is available to order!`;
//     } else {
//         return "Sorry! We are out of stock!";
//     }
// }
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));


// 1. Напиши функцію myAverageScore , яка у якості аргументу
//  отримує масив з оцінками, і виводить користувачу його 
//  середній результат у наступному форматі:
// Average score: A (якщо середня оцінка від 91 до 100)
// Average score: B (якщо середня оцінка від 81 до 90)
// Average score: C (якщо середня оцінка від 71 до 80)
// Average score: D (якщо середня оцінка від 70 і менше)

// Для перевірки:
// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85,
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));