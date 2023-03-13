"use strict"

/* Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение. */

let result = document.querySelector('[data-widget-name]');

console.log(result); // Сам элемент

console.log( result.getAttribute('data-widget-name') ) // Значение атрибута

