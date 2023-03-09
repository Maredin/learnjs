"use strict"




/* nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм. */



let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

function aclean(arr) {
  let map = new Map();

  for(let item of arr) {
	let result = item.toLowerCase().split('');
	result = result.sort( (a, b) => a.localeCompare(b) ).join('');

	map.set(result, item);
  }
  
  let obj = Object.fromEntries(map);
  let arrResult = []
  
  for(let item in obj){
	arrResult.push(obj[item])
  }
  return arrResult;
}

aclean(arr);
