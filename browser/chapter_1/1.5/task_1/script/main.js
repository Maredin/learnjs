"use strict"

/* Напишите код, который выведет каждый элемент списка <li> */

let arr = document.querySelectorAll('li');

for(let i = 0; i < arr.length; i++) {
    let li = arr[i].querySelectorAll('li').length;
    let title = arr[i].firstChild.textContent;

    title = title.trim();
    
    console.log(title + ': ' + li);   
}

