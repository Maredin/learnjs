"use strict"

/* Создайте <div>, который превращается в <textarea>, если на него кликнуть.

<textarea> позволяет редактировать HTML в элементе <div>.

Когда пользователь нажимает Enter или переводит фокус, <textarea> превращается обратно в <div>, и его содержимое становится HTML-кодом в <div>. */


//Создаем клон дива
let view = document.querySelector('.view');
let textarea = document.createElement('textarea');
textarea.classList.add('edit');
textarea.value = view.textContent;

//Создаем текст арею
let cloneView = document.createElement('div');
cloneView.classList.add('view');
cloneView.id = 'view';
cloneView.textContent = view.textContent;

//Заменяем див на клон
(function add() {
    view.replaceWith(cloneView);
})();



//функции замены клона на текстарею и обратно
function hide() {
    cloneView.replaceWith(textarea);
    textarea.focus();
}

function show() {
    textarea.replaceWith(cloneView);
}

cloneView.addEventListener('click', hide);
textarea.addEventListener('blur', show);
