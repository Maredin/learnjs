"use strict"

/* В ифрейме ниже располагается документ с зелёным «полем».

Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.

В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты. */

let field = document.querySelector('#field');


let result = field.getBoundingClientRect();
console.log(result);

let leftBox = result.left;
let rightBox = result.right;
let topBox = result.top;
let bottomBox = result.bottom;

console.log(leftBox + ":" + topBox + " Верхний левый внешний угол");
console.log( (leftBox + field.clientLeft) + ":" + (topBox + field.clientTop) + " Верхний левый внутренний угол" );

console.log(rightBox + ":" + bottomBox + " Нижний правый внешний угол");
console.log( (leftBox + field.clientLeft + field.clientWidth) + ":" + (topBox + field.clientTop + field.clientHeight) + " Нижний правый внутренний угол" );


console.log( (rightBox - field.clientLeft) + ":" + (bottomBox - field.clientTop) + " Нижний правый внутренний угол" ); // если рамка одинаковая то можно и так

