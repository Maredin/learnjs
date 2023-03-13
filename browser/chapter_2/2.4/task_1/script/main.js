"use strict"

/* Почему в коде ниже return false не работает? поправить функцию */

//если переписать в JS все работает сразу
let link = document.querySelector('a');


function handler() {
    alert( "..." );
    return false;
  }


  link.onclick = handler;

