"use strict"

/* Создайте кнопку, которая будет скрывать себя по нажатию. */

let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    btn.style.display = 'none';
});