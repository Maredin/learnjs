"use strict"

/* Каковы координаты центра поля?

Вычислите их и используйте, чтобы поместить мяч в центр поля: */



let field = document.querySelector('#field');
let ball = document.querySelector('#ball');

// Ширина, высота поля и мячика
let fieldWidth = field.clientWidth;
let fieldHeight = field.clientHeight;

let ballWidth = ball.clientWidth;
let ballHeight = ball.clientHeight;

// По аналогии с абсолютным позиционированием в CSS
ball.style.top = field.clientHeight / 2 - ballHeight / 2 + 'px';
ball.style.left = field.clientWidth / 2 - ballWidth / 2 + 'px';

console.log(fieldWidth);
console.log(fieldHeight);