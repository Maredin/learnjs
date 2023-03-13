"use strict"

/* Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать. */

let container = document.querySelector('#container');

container.addEventListener('click', (event) => {
    if(event.target.className !== 'remove-button') {
        return;
    }

    let pane = event.target.closest('.pane');
    pane.remove();
});

