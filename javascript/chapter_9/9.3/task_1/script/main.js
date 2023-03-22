"use strict"

/* Ниже пример кода с таким наследованием (почему он не работает? исправьте его): */



class Rabbit extends Object {
  constructor(name) {
    super(name);
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') ); // Ошибка