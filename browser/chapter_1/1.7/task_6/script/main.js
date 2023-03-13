"use strict"

/* Есть дерево, организованное в виде вложенных списков ul/li.

Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте. */

let li = document.querySelectorAll('li');

for(let item of li) {
  let list = item.querySelectorAll('li');

  if(list.length){
    item.firstChild.textContent += `[ ${list.length} ]`;
  }

}


