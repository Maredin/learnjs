"use strict"

/* Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд. */

function f() {
        alert("Hello!");
}

Function.prototype.defer = function(timeout) {
    setTimeout(this, timeout);
}


f.defer(1000); // выведет "Hello!" через 1 секунду
f.defer(3000); // выведет "Hello!" через 3 секунду

