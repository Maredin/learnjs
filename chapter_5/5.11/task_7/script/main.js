"use strict"

/* Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты. */

function getSecondsToTomorrow() {
    let date = new Date();
    let tomorrow = new Date( date.getFullYear(), date.getMonth(), date.getDate() + 1 );

    let result = Math.round( (tomorrow - date) / 1000 );

    console.log(result);
}

getSecondsToTomorrow();