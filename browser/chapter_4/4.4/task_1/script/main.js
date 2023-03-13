"use strict"

/* Создайте функцию showPrompt(html, callback), которая выводит форму с сообщением (html), полем ввода и кнопками OK/ОТМЕНА.

Пользователь должен ввести что-то в текстовое поле и нажать Enter или кнопку «OK», после чего должна вызываться функция callback(value) со значением поля.
Если пользователь нажимает Esc или кнопку «ОТМЕНА», тогда вызывается callback(null).
В обоих случаях нужно завершить процесс ввода и закрыть диалоговое окно с формой. */

function showPrompt(html, callback) {
    //Создаем переменные
    let promptFormContainer = document.querySelector('#prompt-form-container');
    let coverDiv = document.querySelector('#cover-div');
    let showButton = document.querySelector('#show-button');
    let promptForm = document.querySelector('#prompt-form');
    let promptMessage = document.querySelector('#prompt-message');
    
    promptMessage.innerHTML = html;

    //Назначаем событие на главную кнопку
    showButton.onclick = showModal;

    //функция скрытия модалки
    function hideModal(value) {
        promptFormContainer.style.display = 'none';
        coverDiv.style.display = 'none';
        document.body.style.overflowY = '';
        document.removeEventListener('keydown', escape);
        callback(value);
    }
    //Функция показа модалки
    function showModal() {
        promptFormContainer.style.display = 'block';
        coverDiv.style.display = 'block';
        document.body.style.overflowY = 'hidden';
        promptForm.text.focus();
        promptForm.text.value = '';
        promptForm.cancel.addEventListener('click', cancel);
        document.addEventListener('keydown', escape);
    }

    //Отправка формы и сброс стандартного поведения
    promptForm.onsubmit = () => {
        let textUser = promptForm.text.value;
        if(textUser == ''){
            return false
        };
        hideModal(textUser);
        return false;
    }
    
    //Функции при нажатии кнопки эскейп и сенсел 
    function escape(event) {
        if(event.code == 'Escape'){
            hideModal(null);
        }
    }
    function cancel() {
        hideModal(null);
    }
}

//Запуск главной функции
showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
    alert("Вы ввели: " + value);
});