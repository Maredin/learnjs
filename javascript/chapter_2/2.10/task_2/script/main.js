"use strict"

/* Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!» */

let questions = prompt('Какое «официальное» название JavaScript?', '');

if(questions == 'ECMAScript'){
    alert('Верно!');
}else{
    alert('Не знаете? ECMAScript!');
}