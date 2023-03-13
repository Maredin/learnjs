"use strict"

/* Есть список сообщений.

При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия. */

let pane = document.querySelectorAll('.pane');
let removeButton = document.querySelectorAll('.remove-button');


removeButton.forEach( (item, i) => {
	item.addEventListener('click', () => {
		pane[i].remove();
	});
});