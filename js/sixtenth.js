// // 1
// // Напиши функцію logItems(items) для перебора і логування масива

// // logItems(["Mango", "Kiwi", "Poly", "Ajax"]);
// // logItems([1, 2, 3, 4, 5]);

// const logItems = (arr) =>{
//     for(const item of arr){
//         console.log(item);
//     }
// }

// logItems(["Mango", "Kiwi", "Poly", "Ajax"]);
// logItems([1, 2, 3, 4, 5])



//   2
// Напиши скрипт пошуку логіна
//  - Якщо логіна немає, вивести повідомлення
//  'Користувач [логін] не знайдено.'
//  - Якщо знайшли логін, вивести повідомлення
//  'Користувач [логін] знайдено.'

// const loginToFind = 'aj4xth3m4n';
// const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
// const findLogin = function(arr, loginToFind){
//     for(const login of arr){
//     if(login === loginToFind){
//         return `Користувач ${loginToFind} знайдено.`;
//     }
// }
// return `Користувач ${loginToFind} не знайдено.`;
// }

// console.log(findLogin(logins, 'poly1scute'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scut'));



// Напиши функцию slugify(string) яка отримує рядок
// і повертає URL-slug. Заголовок статті складається
// тільки з букв та пропусків

// const slugify = function(string){
//     const formatedString = string.toLowerCase();
//     const arr = formatedString.split(" ");
//     return arr.join("-");
// }
// console.log(slugify("Top 10 benefits of React framework"));
// console.log(slugify("Azure Static Web Apps are Awesome"));
// console.log(slugify("Technical writing tips for non-native English speakers"));



//  Напиши функцію яка повертає середнє значення з масиву чисел:
//  У цій функції ми передаємо масив чисел в якості параметру,
//  обчислюємо їхню суму та повертаємо середнє значення.
const array = [1, 3, 2, 5, 4];

const calculateAverage = function(arr){
    let sum = 0;
    for(const num of arr){
        sum += num;
    }
    return sum/arr.length;
}


console.log(calculateAverage(array));