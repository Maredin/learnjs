"use strict"

/* Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта. */

let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
  };


console.log(data);



let container = document.getElementById('container');
createTree(container, data);


function createTree(container, data){
  
    let ul = document.createElement('ul');
    
    for (let key in data) {
    let li = document.createElement('li');
    li.textContent = key;
    ul.append(li);
    
    if(data[key]){
        createTree(ul, data[key])
    };

    };
    
    if(ul.textContent){
        container.append(ul);
    };
}
  


