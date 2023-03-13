"use strict"
/* 
Напишите функцию createCalendar(elem, year, month).

Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.

Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.

Например, createCalendar(cal, 2012, 9) сгенерирует в cal следующий календарь: */


let cal = document.querySelector('#calendar');

createCalendar(cal, 2012, 9);


function createCalendar(cal, year, month) {
    let indexMonth = month - 1;
    let daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    let date = new Date(year, indexMonth, 1);
    let table = document.createElement('table');
    
    createHeadCalendar(table, daysOfWeek);
    createBodyCalendar(table, daysOfWeek, date, indexMonth);
    
    cal.append(table);
}
  
function createHeadCalendar(table, daysOfWeek) {
	let trHead = document.createElement('tr');
	
	daysOfWeek.forEach(item => {
		let th = document.createElement('th');
		th.textContent = item;
		trHead.append(th);
	})
	
	table.append(trHead);
}
  
function createBodyCalendar(table, daysOfWeek, date, indexMonth) {
	while(indexMonth === date.getMonth()) {
		let tr = document.createElement('tr');
	
		daysOfWeek.forEach((item, i) => {
			let td = document.createElement('td');
			let dayOfWeek = date.getUTCDay();
			
			if(i === dayOfWeek && indexMonth === date.getMonth()) {
			let day = date.getDate();
			
			td.textContent = day
			date.setDate(day + 1);
			}
		
			tr.append(td);
		});
	
		table.append(tr);
	}
}



