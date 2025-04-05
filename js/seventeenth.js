
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
const filterNum = (array, callback) => {
    let filteredNumbers = [];
    for(const number of array){
        const passTest = callback(number);
        if(passTest){
            filteredNumbers.push(number);
        }
    }
    return filteredNumbers;
}
const f1 = (number) => {
return number < 4;
}
console.log(filterNum(arr, f1));
const f2 = (number) => {
    return number < 3;
    }
    console.log(filterNum(arr, f2));
    const f3 = (number) => {
        return number > 3;
        }
        console.log(filterNum(arr, f3));