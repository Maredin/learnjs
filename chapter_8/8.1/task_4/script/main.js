"use strict"

/* У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить? */

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster,
    stomach: []
  };
  
  let lazy = {
    __proto__: hamster,
    stomach: []
  };
  
  // Если хомяки находят несколько видов еды, то лучше каждому хомяку создать свой живот для еды для хранения
  speedy.eat("apple");
  speedy.eat("potato");

  lazy.eat("banana");
  

  
  alert( speedy.stomach ); 
  
  alert( lazy.stomach ); 