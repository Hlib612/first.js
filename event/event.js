// 1. Напишіть скрипт зміни кольору кнопки при натискані на неї.
const colorsArr = ["red", "green", "blue", "yellow", "orange", "pink"]

// 2. Напиши скрипт реалізації додавання класу до заголовка при кліку на кнопку ‘Додати стилі’.


const changeColorButton = document.querySelector(".js-btn");
const onButtonChangeColorClick = (event) =>{
    console.log("Click")
    changeColorButton.style.backgroundColor = colorsArr[Math.round(Math.random() * (colorsArr.length - 1) + 1)];
}
changeColorButton.addEventListener("click" , onButtonChangeColorClick);


const ButtonAddClassClick = document.querySelector(".js-add-style-btn");
const ButtonAddClassClickText = document.querySelector(".text");
const onButtonAddClassClick = (event) => {
    if(ButtonAddClassClickText.classList.contains("new")){
        ButtonAddClassClickText.classList.remove("new")
    } else{
ButtonAddClassClickText.classList.add("new")
    }
}
ButtonAddClassClick.addEventListener("click" , onButtonAddClassClick);