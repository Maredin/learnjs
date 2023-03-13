"use strict"

/* Напишите код, как получить…

элемент <div>?
<ul>?
второй <li> (с именем Пит)? */

let div = document.getElementsByTagName('div');
let ul = document.getElementsByTagName('ul');
let li = document.getElementsByTagName('li');

console.log(div);
console.log(ul);
console.log(li[1]);