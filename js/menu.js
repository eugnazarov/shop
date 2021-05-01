let headerButton = document.querySelector(".header__menu-button");
let modal = document.querySelector('.modal');
let closeButton = document.querySelector('.modal__menu-exit-btn')
closeButton.addEventListener('click', () =>{
    modal.classList.toggle('modal--open')
})

headerButton.addEventListener('click', () => {

    modal.classList.toggle('modal--open')
})

