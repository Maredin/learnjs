"use strict"

/* Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false. */

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

//Первый вариант
function isEmpty(obj) {
    for (let key in obj){
        return false
    }
    return true   
}


//Второй вариант через количество ключей в обьекте

/* function isEmpty(obj) {
    if(Object.keys(obj).length > 0) {
        return false;
    } else{
        return true;
    }
} */