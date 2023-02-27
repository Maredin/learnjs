"use strict"


/* У нас есть объект salaries с зарплатами: */

let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
  };

/* Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение. */


function topSalary(arr){
	let arrow = Object.entries(arr);
	let salary = 0;
	let result = null;

	for(let [user, price] of arrow){
		if(price > salary) {
			result = [user, price];
			salary = price;
		}
	}

	return result;
	
}

topSalary(salaries);

console.log( topSalary(salaries) );