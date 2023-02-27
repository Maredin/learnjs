"use strict"

/* Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат. */

function pow(x,n) {
  return (x**n);
}

let getX = prompt('x?', '');
let getN = prompt('n?', '');

if(getN < 1) {
  alert('n должно быть больше 0');
}else{
  alert(pow(getX,getN));
}


