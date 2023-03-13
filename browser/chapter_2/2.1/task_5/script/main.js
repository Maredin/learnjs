"use strict"

/* Создать меню, которое по нажатию открывается либо закрывается: */


let title = document.querySelector('.title');
let openUl = document.querySelector('.openUl');
let close = document.querySelector('.close');
let open = document.querySelector('.open');

//Тоглим классы, если нет такого класа то добавляем его, если есть - убираем
function show() {
	openUl.classList.toggle('hide');
	close.classList.toggle('hide');
	open.classList.toggle('hide');
}


title.addEventListener('click', show);