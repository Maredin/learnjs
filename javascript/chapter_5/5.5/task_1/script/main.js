"use strict"


/* Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву. */

function camelize(str) {
    let result = str.split('-');

    for(let i = 1; i < result.length; i++) {
        result[i] = result[i][0].toUpperCase() + result[i].slice(1);
    }

    return result.join('');
}



console.log( camelize("background-color") == 'backgroundColor' );
console.log( camelize("list-style-image") == 'listStyleImage' );
console.log( camelize("-webkit-transition") == 'WebkitTransition' );