"use strict"

/* Сделайте ячейки таблицы редактируемыми по клику.

По клику – ячейка должна стать «редактируемой» (textarea появляется внутри), мы можем изменять HTML. Изменение размера ячейки должно быть отключено.
Кнопки OK и ОТМЕНА появляются ниже ячейки и, соответственно, завершают/отменяют редактирование.
Только одну ячейку можно редактировать за один раз. Пока <td> в «режиме редактирования», клики по другим ячейкам игнорируются.
Таблица может иметь множество ячеек. Используйте делегирование событий. */

let table = document.querySelector('#bagua-table');
let textarea;

table.addEventListener('click', redact);

function redact(event) {
    if(textarea) {
        return;
    }

    let td = event.target.closest('TD');
    if( !td || !table.contains(td) ) {
        return;
    }

    textarea = createTextarea(td);

    let buttonOK = createButtonOK(textarea);
    let buttonCancel = createButtonCancel(textarea, buttonOK);


    redactTd(buttonOK, buttonCancel, td);
    redactTd(buttonCancel, buttonOK, td);
}

//Делам клон textarea из TD-шки
function createTextarea(elem) {
    textarea = document.createElement('textarea');
    textarea.classList.add("edit");
    textarea.value = elem.innerHTML;  
    textarea.style.width = elem.clientWidth + 'px';         
    textarea.style.height = elem.clientHeight - 4 + 'px';
    elem.replaceWith(textarea);                             
    textarea.focus();
    return textarea;
}

//Делаем кнопку Ок
function createButtonOK(textareaEdit) {
    let buttonOK = document.createElement('button');
    buttonOK.classList.add("ok");
    buttonOK.innerHTML = 'OK';
    document.body.append(buttonOK);
    buttonOK.style.top = textareaEdit.getBoundingClientRect().bottom + 4 + 'px'; 
    buttonOK.style.left = textareaEdit.getBoundingClientRect().left + 'px';
    return buttonOK;
}

//Делаем кнопку Cancel

function createButtonCancel(textareaEdit, buttOK) {
    let buttonCancel = document.createElement('button');
    buttonCancel.classList.add("res");
    buttonCancel.innerHTML = 'Отмена';
    document.body.append(buttonCancel);
    buttonCancel.style.top = textareaEdit.getBoundingClientRect().bottom + 4 + 'px'; 
    buttonCancel.style.left = buttOK.getBoundingClientRect().right + 2 + 'px';
    return buttonCancel;
}


//Удаление textarea
function redactTd(buttonOk, buttonCencel, td) {
    buttonOk.onclick = () => {
      if(buttonOk.innerHTML == 'OK') {
        td.innerHTML = textarea.value;
      }
      textarea.replaceWith(td);
      buttonOk.remove();
      buttonCencel.remove();
      textarea = null;                 
    };
  }