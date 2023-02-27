"use strict"

/* Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью. */

function randomInteger(min, max) {
    return ( Math.floor( Math.random() * max + min ) );
}

alert( randomInteger(1, 5) );