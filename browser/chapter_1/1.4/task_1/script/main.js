"use strict"

/* Как найти?…

Таблицу с id="age-table".
Все элементы label внутри этой таблицы (их три).
Первый td в этой таблице (со словом «Age»).
Форму form с именем name="search".
Первый input в этой форме.
Последний input в этой форме. */

let table = document.querySelector('#age-table')

let lable = document.querySelectorAll('label');

let td = table.querySelector('td')

let form = document.querySelector('form[name="search"]')

let input = form.querySelectorAll('input');
let inputFirst = input[0];
let inputLast = input[input.length - 1];


console.log(table);
console.log(lable);
console.log(td);
console.log(form);
console.log(inputFirst);
console.log(inputLast);