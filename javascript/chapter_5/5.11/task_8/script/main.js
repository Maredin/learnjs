"use strict"

/* Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00. */


function formatDate(date) {
    let now = new Date();
    let step = now - date;

    if(step < 1000) {
        return "прямо сейчас";
    } else if ( step < (60 * 1000) ) {
        return "30 сек. назад";
    } else if ( step < (60 * 60 * 1000) ) {
        return ( `${step / 60 / 1000} мин. назад`)
    }else {
        let day = now.getDate();
            day = addZero(day);
        let month = now.getMonth() + 1;
            month = addZero(month);

        let year = now.getFullYear();
            year = year.toString().slice(2);

        let houers = now.getHours();
            houers = addZero(houers);

        let minuts = now.getMinutes();
            minuts = addZero(minuts);

        function addZero(item) {
            item = item.toString();
            if(item.length < 2) {
                item = 0 + item;
            }
            return item;
        }

        return (`${day}.${month}.${year} ${houers}:${minuts}` );
    }
}








alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );