// 1
// Cтворити масив Arr1 за значеннями: 1, 5, "4", "hello" ;
//  і Arr2 зі значеннями: true,2, {}, ["a"], 222 . 
//  Вивести в консоль 2-гий елемент (по індексу) кожного з масивів 
//  довжину масиву.

// const arr1 = [1, 5, "4", "hello"];
// console.log(arr1)
// const arr2 = [true,2, {}, ["a"], 222];
// console.log(arr2)
// console.log(arr1[0])
// console.log(arr1[1] ,arr2[1] , arr1.length , arr2.length )

//  2
// Створіть масив рядків. 
const fruits = ["apple", "plum", "pear", "orange"];
// Виведіть в консоль значення першого, 
// другого та останнього елементу. 
// Змініть значення останнього елементу на "peach"
// а другого на "banana".
console.log(fruits[0], fruits[1], fruits[fruits.length - 1])
fruits[fruits.length - 1] = "peach";
fruits[1] = "banana";
console.log(fruits)