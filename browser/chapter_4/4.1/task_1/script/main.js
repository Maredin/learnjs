"use strict"

/* Выведите значение и текст выбранного пункта.
Добавьте пункт: <option value="classic">Классика</option>.
Сделайте его выбранным. */


let genres = document.querySelector('#genres');

let list = genres.options;
let index = list.selectedIndex; //Индекс выбранного
let target = genres.value; //Валуе выбранного

//Значение и текст выбранного

console.log(target)
console.log(list[index].innerText); //Текст 


let option = new Option('Классика', 'classic'); //Новый элемент

genres.append(option);
option.selected = true;
