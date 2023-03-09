"use strict"


/* Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты. */

function getSecondsToday() {
    let current = new Date();
    let morning = new Date(current.getFullYear(), current.getMonth(), current.getDate());
    
    let result = Math.round( (current - morning) / 1000 );
    
    console.log(result);
}
getSecondsToday()