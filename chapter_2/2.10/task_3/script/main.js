"use strict"

/* Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа. */

let questions = prompt('Введите число', '');

if(questions > 0){
    alert(1);
}else if(questions < 0){
    alert(-1);
}else if(questions == 0){
    alert(0);
}