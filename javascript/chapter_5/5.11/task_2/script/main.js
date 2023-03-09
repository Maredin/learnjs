"use strict"


/* Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС». */


let date = new Date(2012, 0, 3);  // 3 января 2012 года

alert( getWeekDay(date) );        // нужно вывести "ВТ"

function getWeekDay(data) {
    let week = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    let numbWeek = data.getDay();
    let result = week[numbWeek];

    return result;
}
