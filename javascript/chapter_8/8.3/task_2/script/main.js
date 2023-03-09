"use strict"

/* Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд. */

function f(a, b) {
    alert( a + b );
}
  
Function.prototype.defer = function(ms) {
    let fanc = this;
    
    return function(...args) {
        setTimeout(() => fanc.apply(this, args), ms);
    }
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.