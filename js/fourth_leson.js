// 6 Отримати  останній символ :
const fruit = 'апельсин';
const lenght = fruit.length;
const lastSumbol = lenght - 1;
console.log(lastSumbol)
console.log(fruit[lastSumbol])
// 7 чи містить фраза "Jason Neis" це слово "jAsOn" має бути так
// Здійсни перевірку незалежно від регістру
const frase = "Jason Neis".toLowerCase();
console.log(frase)
const word = "jAsOn".toLowerCase();
console.log(word)
console.log(frase.includes(word))
// 8 "styles.css", перевірити чи закінчується на ".css", ".js"
const document = 'styles.css';
console.log(document.endsWith('.css'));
console.log(document.endsWith('.js'));
// Створити скрипт, який буде отримувати від користувача число
// (кількість хвилин) і буде виводити рядок в форматі часу як результат. 

// Наприклад 80 виведе 01:20 
//          450 =>     07:30

// скільки хв в годині? 
// як вирахувати кількість годин з хвилин?
// який метод округлить число до меншого?
// який метод додасть на перед символи&  7  =>  07
const number = 123;
const hours = Math.floor(number/60);
console.log(hours)
const minutes = number % 60;
console.log(minutes)
const modHours = String(hours).padStart(2, 0);
const modMinutes = String(minutes).padStart(2, 0);
const freseForTime = `${modHours}:${modMinutes}`;
console.log(freseForTime)