"use strict"

/* Измените код решения предыдущего задания так, чтобы элемент заметки использовал свойство position:absolute вместо position:fixed.

Это предотвратит расхождение элементов при прокрутке страницы.

Используйте решение предыдущего задания для начала. Чтобы проверить решение в условиях с прокруткой, добавьте стиль элементу <body style="height: 2000px">. */

let blockquote = document.querySelector('blockquote');
let positions = blockquote.getBoundingClientRect();
console.log(positions);

function positionAt(anchor, position, elem) {
    let cord = anchor.getBoundingClientRect();
    
    if(position == 'top-out') {
        elem.style.top = ( cord.top - elem.offsetHeight ) + 'px';
        elem.style.left = cord.left + 'px';
    }else if(position == 'right-out') {
        elem.style.top = cord.top + 'px';
        elem.style.left = ( cord.left + anchor.clientWidth  + anchor.clientLeft) + 'px';
    }else if(position == 'bottom-out') {
        elem.style.top = ( cord.top + anchor.clientHeight ) + 'px';
        elem.style.left = cord.left + 'px';
    }

    if(position == 'top-in') {
        elem.style.top = cord.top + 'px';
        elem.style.left = cord.left + 'px';
    }else if(position == 'right-in') {
        elem.style.top = cord.top + 'px';
        elem.style.left = ( cord.left + anchor.clientWidth  + anchor.clientLeft - elem.clientWidth - ( elem.clientTop * 2 ) ) + 'px';
    }else if(position == 'bottom-in') {
        elem.style.top = ( cord.top + anchor.clientHeight - elem.clientHeight - ( elem.clientTop * 2 ) ) + 'px';
        elem.style.left = cord.left + 'px';
    }
}


function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    note.style.position = "absolute";
    document.body.append(note);

    positionAt(anchor, position, note);
}

/* showNote(blockquote, "top-out", "note above");
showNote(blockquote, "right-out", "note at the right");
showNote(blockquote, "bottom-out", "note below"); */

showNote(blockquote, "top-in", "note above");
showNote(blockquote, "right-in", "note at the right");
showNote(blockquote, "bottom-in", "note below");