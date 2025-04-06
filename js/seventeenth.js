
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
// const filterNum = (array, callback) => {
//     let filteredNumbers = [];
//     for(const number of array){
//         const passTest = callback(number);
//         if(passTest){
//             filteredNumbers.push(number);
//         }
//     }
//     return filteredNumbers;
// }
// const f1 = (number) => {
// return number < 4;
// }
// console.log(filterNum(arr, f1));
// const f2 = (number) => {
//     return number < 3;
//     }
//     console.log(filterNum(arr, f2));
//     const f3 = (number) => {
//         return number > 3;
//         }
//         console.log(filterNum(arr, f3));


/*   1.
Напишіть функцію, яка приймає на вхід масив чисел 
і повертає новий масив, в якому кожний елемент є 
квадратом відповідного елементу вхідного масиву.
Знайдіть суму елементів масиву 
з використанням колбек-функції */
const array = [1, 2, 3, 4, 5, 6, 7, 8];


const multiFunction = (arr, callback) => {
    let newNumArr = [];
    for(const number of arr){
        newNumArr.push(number ** 2);
    }
    const sum = callback(newNumArr);
    return sum;
    }
    const sum = (arr) => {
        let total = 0;
        for(const number of arr){
                    total += number;
                }
        return total;
            }
            const multiply = (arr) => {
                let total = 1;
                for(const number of arr){
                            total *= number;
                        }
                return total;
                    }
console.log(multiFunction(array, sum))
console.log(multiFunction(array, multiply))

// console.log(sqare(array, sum = function(arr){
//     for(const number of arr){
//         let total;
//         total += number;
//     }
// }))