"use strict"

/* Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

Ссылка является внешней, если:

Её href содержит ://
Но не начинается с http://internal.com. */

let ul = document.querySelector('ul');
let arr = ul.querySelectorAll('a');

for(let item of arr) {
    let href = item.getAttribute('href');

    if( href.includes('://') && !href.includes('http://internal.com') ){
        item.style.color = 'orange';
    }
 }

