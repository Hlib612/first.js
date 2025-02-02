// Заміни у виразах стандартні математичні оператори на комбіновані оператори

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;
// console.log(a, b, c, d)
// Доповни код, присвоївши змінній totalPrice вираз для підрахунку 
// загальної суми замовлення.
//  Змінна pricePerItem зберігає ціну за одиницю товару,
//  а orderedQuantity - кількість одиниць товару в замовленні.

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice)
// 3
// Оголоси змінну isAdult та задай їй результат 
// перевірки значення змінної age.
//  Використай оператори порівняння та доповни код так, щоб 
//  значенням isAdult було true, якщо вік користувача більше або дорівнює 18 
//  та false, якщо менше 18.

// const age = 16;
// const isAdult = 18 <= age;
// console.log(isAdult)

// 4
// Оголоси змінну isValid і задай їй значенням результат перевірки
//  рівності паролей в змінних correctPassword і userPassword.

// Якщо паролі співпадають (сувора рівність), значення isValid має бути true
// Якщо паролі не співпадають, значення isValid має бути false

// const correctPassword = "jqueryismyjam";
// const userPassword = "mangodab3st";
// const isValid = correctPassword === userPassword;
// console.log(isValid)

// const firstNumber = prompt('Ведіть перше число')
// const secondtNumber = prompt('Ведіть друге число')
// const answerPlus = alert(firstNumber + secondtNumber)
// Трохи не так вийшло хахааха
// 5.845   >>>>>   5.8
// let numOne = 5.845;
// numOne = numOne.toFixed(1)
// console.log(numOne)
// numOne = Number(numOne)
// console.log(numOne)

/*   задача 4
    Напиши скрипт який каже користувачу ввести число та ступінь,
    потім зводить число до ступеню та виводить результат в консоль
      1. попросити ввести число і зберегти в змінну та вивести в консоль
      2. попросити ввести ступінь та зберегти в змінну та вивести в консоль
      3. Звести введені дані до ступеня та вивести результат в консоль

      !!! перед розрахунком перетворити явно отримані результати в число
 */
const number = prompt('Ведіть число');
const pitch = prompt('Ведіть ступінь');
console.log(number);
console.log(pitch);
const result = Number(number) ** Number(pitch);
console.log(result);
alert(result);