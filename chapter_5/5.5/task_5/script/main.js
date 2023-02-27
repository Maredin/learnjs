"use strict"


/* У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию. */

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)


function copySorted(arr) {
    let result = [];
    
    for(let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    return ( result.sort( (a, b) => a.localeCompare(b) ) );
}