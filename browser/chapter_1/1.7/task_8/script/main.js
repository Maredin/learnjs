"use strict"

/* Создайте цветные часы как в примере */

start(); //Показ времени сразу

function start() {
	let data = new Date();

	let hour = document.querySelector('.hour');
	let min = document.querySelector('.min');
	let sec = document.querySelector('.sec');
	
	hour.style.color = "red";
	min.style.color = "green";
	sec.style.color = "blue";

	let hourData = data.getHours();
	let minData = data.getMinutes();
	let secData = data.getSeconds();

	addZero(hourData, hour);
	addZero(minData, min);
	addZero(secData, sec);


	function addZero(time, cont) {
		sec = document.querySelector('.sec');
		
		if(time < 10) {
			time = '0' + time;
		}
		cont.textContent = time;
	};
}



//функции интервала стоп старт

let interval;
function clockStart() {
	if(!interval){
		start();
		interval = setInterval(start, 1000);
	}
}
function clockStop() {
	clearInterval(interval);
	interval = null;
}







