"use strict"

/* Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
Посмотрите код из песочницы с полным примером использования.

P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так. */

function makeCounter() {
    counter.count = 0;

    function counter() {
      return counter.count++;
    };
  
    counter.set = function(value) { 
        return counter.count = value;
    }
    
    counter.decrease = function() {
        return counter.count--;
    }      
 
    return counter;
  }

  
  
  let counter = makeCounter();
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  console.log( counter.set(13) ); // 13
  console.log( counter() ); // 13
  console.log( counter.decrease() ); // 14
  console.log( counter.decrease() ); //13