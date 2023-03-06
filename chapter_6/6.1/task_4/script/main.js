"use strict"

/* Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек): */

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

/* Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию. */

//Через Рекурсию
console.log('Через Рекурсию')

function printList(list) {
    console.log(list.value);

    if(list.next){
        printList(list.next)
    }
}

printList(list);



//Через циклы
console.log('Через циклы')

function printListSecond(list) {
    let result = list;

    while(result){
        console.log(result.value);
        result = result.next;
    }
}

printListSecond(list)
