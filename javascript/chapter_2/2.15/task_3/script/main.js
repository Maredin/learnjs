"use strict"

/* Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b. */

function min(a,b) {
  return (a < b) ? a : b;
}

let getA = prompt('Введите число А', '');

let getB = prompt('Введите число B', '');



alert('Минимальное число ' + min(getA, getB));