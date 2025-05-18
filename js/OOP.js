// 1
// Створіть клас Person, що містить властивості
// firstName та lastName.
// Додайте метод getFullName(), який повертає
// повне ім'я у форматі "firstName lastName".


class Person {
    constructor(firstName , lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
         return `${this.firstName} ${this.lastName}`;
    }
    showName(){
        return this.firstName;
    }
    changeName(newName){
        this.firstName = newName;
    }
}

const person1 = new Person ("John", "Sina",);
console.log(person1);

console.log(person1.getFullName());
console.log(person1.showName());
console.log(person1.changeName("Leon"));
console.log(person1);
// 2
// Створіть клас Rectangle, що містить властивості
// width та height.
// Додайте метод getArea(), який повертає площу прямокутника.

// const rectangle1 = new Rectangle(10, 5);
// console.log(rectangle1.getArea()); // 50

class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea() {
    return this.width * this.height
  }
}
const rectangle1 = new Rectangle(10, 5);
console.log(rectangle1.getArea()); // 50

// 3
// Створіть клас Calculator, який буде мати наступні методи:
// add(), subtract(), multiply(), divide().
// Кожен метод приймає два аргументи - числа, які необхідно обробити
// Результатом кожного методу має бути результат
// відповідної математичної операції.
class Calculator{
    add(firstNum, secondNum){
        return firstNum + secondNum;
    }
    subtract(firstNum, secondNum){
        return firstNum - secondNum;
    }
    multiply(firstNum, secondNum){
        return firstNum * secondNum;
    }
    divide(firstNum, secondNum){
        if(firstNum!== 0 & secondNum!== 0){
    return firstNum / secondNum;
        } else{
            return "На нуль ділити не можна"
        }
    }
}
const calculator = new Calculator();
console.log(calculator.add(2, 3)); // 5
console.log(calculator.subtract(5, 2)); // 3
console.log(calculator.multiply(2, 4)); // 8
console.log(calculator.divide(10, 2)); // 5
console.log(calculator.divide(10, 0)); // На нуль ділити не можна



class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed;
    }
}
const myDog = new Dog('Buddy', 'Labrador Retriever');
console.log(myDog); // { name: 'Buddy', breed: 'Labrador Retriever' }