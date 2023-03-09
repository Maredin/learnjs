"use strict"


/* Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr. */



function unique(arr) {

    let arrSet = new Set(arr)

    return [...arrSet];
}



let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O