/*let button = document.getElementById('burger');

let navigation = document.getElementById('menu');

let wrp = document.getElementById('wrp');

button.addEventListener('click', function(){
    navigation.classList.toggle('display-block');
    wrp.classList.toggle('display-block');
});*/

let headerButton = document.querySelector(".header__menu-button");
let modal = document.querySelector('.modal');
let closeButton = document.querySelector('.modal__menu-exit-btn')
let black = document.querySelector('.modal__black')
closeButton.addEventListener('click', () =>{
    modal.classList.toggle('modal--open')
})

headerButton.addEventListener('click', () => {

    modal.classList.toggle('modal--open')
})

