"use strict"

/* Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null. */

function readNumber() {
    let result = prompt('Введите число?', '0');
      
    
    if( result == null || result =='' ){
        return null;
    }else if( isFinite(result) ) {
        return +result;
    }else{
        readNumber();
    }

}
alert( 'Число: ' + readNumber() );