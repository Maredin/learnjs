"use strict"

/* Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости от значения свойства position рядом с элементом anchor.

Аргумент position – строка с одним из 3 значений:

"top" – расположить elem прямо над anchor
"right" – расположить elem непосредственно справа от anchor
"bottom" – расположить elem прямо под anchor
Она используется внутри функции showNote(anchor, position, html), которая уже есть в исходном коде задачи. Она создаёт и показывает элемент-«заметку» с текстом html на заданной позиции position рядом с элементом anchor. */

let blockquote = document.querySelector('blockquote');
let positions = blockquote.getBoundingClientRect();
console.log(positions);

function positionAt(anchor, position, elem) {
    let cord = anchor.getBoundingClientRect();
    
    if(position == 'top') {
        elem.style.top = ( cord.top - elem.offsetHeight ) + 'px';
        elem.style.left = cord.left + 'px';
    }else if(position == 'right') {
        elem.style.top = cord.top + 'px';
        elem.style.left = ( cord.left + anchor.clientWidth  + anchor.clientLeft) + 'px';
    }else if(position == 'bottom') {
        elem.style.top = ( cord.top + anchor.clientHeight ) + 'px';
        elem.style.left = cord.left + 'px';
    }
}


function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");