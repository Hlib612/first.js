// 2
// Переписати на while
// let number = 0;
// while(number < 5){
//     console.log(`Число ${number}`);
//     number += 1
// }

// for (let number = 0; number < 5; number += 1) {
//     console.log(`Число ${number}`);
// }

// 3
//   Доповни код таким чином, щоб у змінну w записувалося
//  перше число у проміжку від start до end,
// яке ділиться на 5 без остачі

// const start = 6;
// const end = 17;
// let w;
// for (let index = start; index <= end; index += 1) {
// if(index % 5 === 0){
//     w = index;
//     console.log(w);
//     break;
// }
//     }
//     console.log(w);

// 4
// Виведіть в консоль всі непарні числа від 10 до 20
// за допомогою циклу for

// for(let i = 10; i <= 20; i += 1){
//     if(i % 2 === 0){
//         console.log("Ми знайшли парне число");
//         continue;
//     }
//     console.log("Ми знайшли непарне число", i);
// }
// for (let i = 10; i <= 20; i += 1) {
//     if (i % 2 !== 0) {
//        console.log("ne parni", i);
//      }
//    }
// Напиши цикл, який пропонує в prompt ввести число, більше 100.
// Якщо відвідувач ввів інше число – попросити ввести ще раз и т.д.

// const num = prompt("Введіть число більше 100");
// let userNumber;
// do {
//   userNumber = prompt("Введіть число більше 100");
// } while (userNumber < 100);
// console.log(userNumber)

// Напиши скрипт який підраховує загальну суму зп працівників. 
// Кількість робітників зберігається в змінній employees.
// ЗП кожного працівника це випадкове число від 500 до 5000. 
// Записати суму в змінну totalSalary і вивести в на сторінку.

// // 1 змінні
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;
// for(let i = 0; i < employees; i += 1){
//     console.log(i)
//     const salary = Math.random() * (maxSalary - minSalary) + minSalary;
//         totalSalary += Math.round(salary);
//         console.log(totalSalary)
// }