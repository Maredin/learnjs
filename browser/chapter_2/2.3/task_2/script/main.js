"use strict"

/* Создайте дерево, которое по клику на заголовок скрывает-показывает потомков: */


let container = document.querySelector('.tree');

container.addEventListener('click', (event) => {
    if(event.target.tagName !== 'SPAN') {
        return;
    }

    let children = event.target.parentNode.querySelector('ul');
    
    if(!children){
        return;
    }
    
    children.hidden = !children.hidden;
});

