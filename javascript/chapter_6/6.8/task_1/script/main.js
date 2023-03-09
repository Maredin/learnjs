"use strict"

/* Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout. */

//Первый вариант

function printNumbers(from, to) {
    let num = from;


    function start(){
        console.log(num);
        num++;

        if(num == (to + 1) ) {
        clearInterval(startInterval);
        }
    }
    let startInterval = setInterval(start, 1000);
}

//Второй вариант

/* function printNumbers(from, to) {
    let num = from;


    setTimeout(function start(){
        console.log(num);
        num++;

        if(num < (to + 1) ) {
            setTimeout(start, 1000);
        }
   
    }, 1000);

    
} */

printNumbers(1, 15);