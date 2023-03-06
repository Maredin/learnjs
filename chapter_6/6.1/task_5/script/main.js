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

/* Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два варианта решения: используя цикл и через рекурсию. */

//Через Рекурсию
console.log('Через Рекурсию');

function printList(list) {
    if(list.next){
        printList(list.next)
    }

	console.log(list.value);
}

printList(list);



//Через циклы
console.log('Через циклы');

function printListSecond(list) {
    let result = list;
	let arr = [];

    while(result){
        arr.push(result.value);
        result = result.next;
    }
	console.log( arr.reverse() );
}

printListSecond(list)
