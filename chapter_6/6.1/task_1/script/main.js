"use strict"

/* Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050 */

//Первый вариант
function sumTo(n) {
    let result = 0;

    for(let i = n; i > 0; i--) {
        result += i;
    }
    return result
}

console.log( sumTo(1) );
console.log( sumTo(2) );
console.log( sumTo(3) );
console.log( sumTo(4) );
console.log( sumTo(100) );

//Второй вариант
function sumToSecond(n){
    return (n > 1) ? ( n + sumToSecond(n - 1) ) : n;
}

console.log( sumToSecond(1) );
console.log( sumToSecond(2) );
console.log( sumToSecond(3) );
console.log( sumToSecond(4) );
console.log( sumToSecond(100) );

//Третий вариант
function sumToThree(n){
    return ( n * (n + 1) ) / 2;
}

console.log( sumToThree(1) );
console.log( sumToThree(2) );
console.log( sumToThree(3) );
console.log( sumToThree(4) );
console.log( sumToThree(100) );
