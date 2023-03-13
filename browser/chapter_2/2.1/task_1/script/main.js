"use strict"

/* Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал. */

let button = document.querySelector('#hider');
let text = document.querySelector('#text');

function hide(item) {
    if(item.style.display == 'none'){
        item.style.display = 'block'
    } else{
        item.style.display = 'none'
    }
    
};

button.addEventListener('click', () => {
    hide(text);
});