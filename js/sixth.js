// const emotion = "love";

// switch (emotion) {
//   case "anger":
//   case "fear":
//   case "sadness":
//     console.log("This is a Negative emotion");
//     break;
//   case "hope":
//   case "love":
//   case "calmness":
//     console.log("It is a Positive emotion");
//     break;
//   default:
//     console.log("Invalid value");
// }
// const browser = "Firefox";
// let text;

// if(browser == 'Edge') {
//   text = "You've got the Edge!";
// } else if (browser == 'Chrome'
//  || browser == 'Firefox'
//  || browser == 'Safari'
//  || browser == 'Opera') {
//   text = 'Ми підтримуємо і ці браузери' ;
// } else {
//   text =  'Маємо надію, що ця сторінка виглядає добре!' ;
// }

// switch(browser){
// case 'Edge':
//     text = "You've got the Edge!";
//     break;
//     case 'Firefox':
//         case 'Chrome':
//             case 'Safari':
//                 case 'Opera':
//     text = "Ми підтримуємо і ці браузери";
//     break;
//     default :
//     text = "Маємо надію, що ця сторінка виглядає добре!";
//  }
//  alert(text);

// const a1 = prompt('Type value');
// let output;

// if (a1 === 0) {
//   output = 0;
// }
// if (a1 === 1) {
//   output = 1;
// }
// if (a1 === 2 || a1 === 3) {
//   output = "2,3";
// }

// switch(a1){
//     case '0':
//         output = 0;
//         break;
//         case '1':
//             output = 1;  
//             break;
//             case '2' || '3':
                // output = "2,3";
                // break;
                // default:
//                     console.log("invalid value")
// }
// console.log(output)

// Напиши скрипт вибору готеля по кількості зірок.
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
// Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
//  'Токої кількості зірок немає'

// const stars = prompt('Ведіть кількість зірок не більше 5');
// let cost;
// switch(stars){
//     case '1':
//     cost = '20$';
//     break;
//     case '2':
//     cost = '30$';
//     break;
//     case '3':
//     cost = '50$';
//     break;
//     case '4':
//     cost = '70$';
//     break;
//     case '5':
//     cost = '120$';
//     break;
//     default:
//         alert('invalid value')
// }
// alert(`Ваш готель буде коштувати ${cost}`);

// 1
// Напиши скрипт вибору опції доставки товару.
// Опція зберігається в змінній option:
//  1 - самовивіз, 2 - кур"єр, 3 - пошта.
// В змінну message записати повідомлення в залежності від опції.

//  - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
//  - 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
//  - 'Посилка буде відправлена сьогодні'
//  - 'Вам передзвонить менеджер'.
// let message;
// const option = 2;
// switch(option){
//     case 1 :
//         message = 'Ви зможете забрати товар завтра з 12:00 в нашому офісі';
//         break;
//         case 2 :
//             message = 'Кур"єр доставить замовлення завтра з 9:00 до 18:00';
//             break;
//             case 3 :
//             message = 'Посилка буде відправлена сьогодні';
//             break;
//             default:
//                 alert('Вам передзвонить менеджер')
// }
// console.log(message)

//  Виберіть будь-яке число від 1 до 5 включно через функцію random.
//   За допомогою if else визначіть, що це за число.
//  Якщо ваше ім’я містить більше 4 букв і прізвище більше 5,
//  то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “УПС”.

// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер.
// Виводимо 12. Використовувати вбудований метод length.

// const userName = 'Богдан';
// const userSurname = 'Бондар';
// let fullNameLength = 0;
// if(userName.length > 4 && userSurname.length > 5){
//     fullNameLength = userName.length + userSurname.length;
// } else{
//     fullNameLength = "Упс";
// }
// alert(fullNameLength);