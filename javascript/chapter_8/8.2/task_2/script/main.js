"use strict"

/* Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();
Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно. */



// Если прототайп не меняли, то можно так:

    function Rabbit(name) {
        this.name = name;
        alert(name);
    }
  
    let rabbit = new Rabbit("White Rabbit");
    
    let rabbit2 = new rabbit.constructor("Black Rabbit");


    
// Поменяли прототайп не назначив свойство конструктор на RabbitError

    function RabbitError(name) {
        this.name = name;
        alert(name);
    }
    RabbitError.prototype = {
        jumps: true,
        /* constructor: RabbitError */    // если раскоментировать конструктор, то все заработает
    };
    let rabbitError = new RabbitError("White Rabbit Error")
    let rabbitError2 = new rabbitError.constructor("Black Rabbit Error");