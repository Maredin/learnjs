"use strict"


/* Напишите функцию count(obj), которая возвращает количество свойств объекта: */

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2


function count(obj) {
	return Object.values(obj).length;
}
