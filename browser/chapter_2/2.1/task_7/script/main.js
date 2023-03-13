"use strict"

/* Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки. */

//Контейнер который двигать будем
let ul = document.querySelector('ul');
//Стрелки боковые
let leftBtn = document.querySelector('.left');
let rightBtn = document.querySelector('.right');

//Обработчик событий назначили
leftBtn.addEventListener('click', imageLeft);
rightBtn.addEventListener('click', imageRight);

//Сама функция
let step = 0;

function imageLeft() {
	
	if(step >= 0) {
		step = step;
	}else if(step >= -130){
		step += 130;
	}else {
		step += 390;
	}

	ul.style.left = step + 'px';
}

function imageRight() {
	if(step <= -910) {
		step = step;
	}else if(step <= -780){
		step -= 130;
	}else {
		step -= 390;
	}

	ul.style.left = step + 'px';
}