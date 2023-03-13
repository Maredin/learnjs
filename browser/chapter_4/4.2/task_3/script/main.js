"use strict"

/* Установите фокус на мышь. Затем используйте клавиши со стрелками, чтобы её двигать:

Демо в новом окне

P.S. Не добавляйте обработчики никуда, кроме элемента #mouse.

P.P.S. Не изменяйте HTML/CSS, подход должен быть общим и работать с любым элементом. */

let mouse = document.querySelector('#mouse');

mouse.tabIndex = '0';
mouse.style.position = 'fixed';

let widthMouse = mouse.getBoundingClientRect().width;
let heightMouse = mouse.getBoundingClientRect().height;


mouse.addEventListener('keydown', move);


//Функция движения грызуна
function move(event) {
    //Вниз
    if(event.code == "ArrowDown") {
        let coordTop = mouse.getBoundingClientRect().top;
        mouse.style.top = coordTop + heightMouse + 'px';
    }

    //Вверх
    if(event.code == "ArrowUp") {
        let coordTop = mouse.getBoundingClientRect().top;
        mouse.style.top = coordTop - heightMouse + 'px';
    }

    //Вправо
    if(event.code == "ArrowRight") {
        let coordTop = mouse.getBoundingClientRect().left;
        mouse.style.left = coordTop + widthMouse + 'px';
    }

    //Влево
    if(event.code == "ArrowLeft") {
        let coordTop = mouse.getBoundingClientRect().left;
        mouse.style.left = coordTop - widthMouse + 'px';
    }   
}

