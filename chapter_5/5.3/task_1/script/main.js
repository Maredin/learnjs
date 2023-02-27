"use strict"

/* Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. */

ucFirst("вася");

function ucFirst(name) {
    alert( name[0].toUpperCase() + name.slice(1));
}