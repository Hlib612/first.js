const backDrop = document.querySelector(".js-backdrop");
const openModalButton = document.querySelector('button[data-action="open-modal"]');
const closeModalButton = document.querySelector('button[data-action="close-modal"]');

// console.log(backDrop);
// const modalDiv = document.querySelector(".modal");
// console.log(modalDiv);
// console.log(openModalButton);
// console.log(closeModalButton);

const onButtonModalOpen = (event) => {
    document.body.classList.add("show-modal");
}

const onButtonModalClose = (event) => {
    document.body.classList.remove("show-modal");
}

const onBackDropClick = (event) => {
    // console.log(event.target)
    // console.log(event.currentTarget)
    if(event.target === event.currentTarget){
        onButtonModalClose();
    }
    
}

openModalButton.addEventListener("click" , onButtonModalOpen);

closeModalButton.addEventListener("click" , onButtonModalClose);

backDrop.addEventListener("click" , onBackDropClick);