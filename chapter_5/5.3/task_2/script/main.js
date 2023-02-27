"use strict"

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

let filte1 = 'viagra',
    filte2 = 'XXX';

function checkSpam(str) {
    str = str.toLowerCase();
    filte1 = filte1.toLowerCase();
    filte2 = filte2.toLowerCase();

    return ( str.includes(filte1) || str.includes(filte2) )
}

console.log( checkSpam('podagra sosiska XXX') )
console.log( checkSpam('podagra sosiska xxx') )
console.log( checkSpam('podagra sosiska') )
console.log( checkSpam('ViaGra podagra sosiska') )
console.log( checkSpam('viagra podagra sosiska xXx') )