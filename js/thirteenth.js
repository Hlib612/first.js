// // Знайти спільні елементи. 
// const array1 = [1, 2, 3];
// const array2 = [10, 20, 30];
// const newArray = [];

// for (const el of array1) {
//     // console.log(el, array2.includes(el));
//     if (array2.includes(el)) {
//         newArray.push(el)
//     }
// }
// // console.log(newArray);

// 1
// Доповни код таким чином, 
// щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2)
// const nonExtremeEls = fruits.slice(1, fruits.length - 1)
// const lastThreeEls = fruits.slice(-3)

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// Оголоси змінну allClients та доповни код таким чином,
//  щоб її значенням було посилання на масив, 
//  що складається з усіх елементів масивів oldClients і newClients. 
// Спочатку мають іти елементи з масива oldClients, а потім з newClients.

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients)
// console.log(allClients);

// 3
// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код так, 
// щоб виконувати пошук значення value у масиві array 
// і повертати:
//  - порожній масив, якщо в array немає елемента зі значенням value
//  - підмасив, що починається з початку array 
//    і до елемента зі значенням value включно, якщо такий елемент є в array
// ["Mango", "Poly", "Ajax"], "Poly" повертає ["Mango", "Poly"]
// ["Mango", "Poly", "Ajax"], "Jacob" повертає []
// const array = ["Mango", "Poly", "Ajax"];
// const value = "Poly";
// let arr = [];
// const elemIndex = array.indexOf(value);
// console.log(elemIndex);
// arr = array.slice(0, elemIndex + 1)
// console.log(arr);