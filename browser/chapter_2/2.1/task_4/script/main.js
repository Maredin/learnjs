"use strict"

/* Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
CSS-анимация желательна, но не обязательна;
Мяч ни в коем случае не должен пересекать границы поля;
При прокрутке страницы ничего не должно ломаться;
Заметки:

Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
Используйте свойства event.clientX/event.clientY для определения координат мыши при клике. */


let field = document.querySelector('#field');
let ball = document.querySelector('#ball');


function cord(event){
    let coordinate = field.getBoundingClientRect();
    let x = event.clientX;
    let y = event.clientY;

    let topBall = ( y - coordinate.top - ball.clientHeight / 2 - field.clientTop);
    let leftBall = (x - coordinate.left - ball.clientWidth / 2 - field.clientLeft);

    //Проверка на границы
    if (topBall< 0) {topBall = 0}
    if (leftBall < 0) leftBall = 0;

    if (topBall + ball.clientHeight > field.clientHeight) {
        topBall = field.clientHeight - ball.clientHeight;
      }
    if (leftBall + ball.clientWidth > field.clientWidth) {
        leftBall = field.clientWidth - ball.clientWidth;
      }
    
      ball.style.top = topBall + 'px';
      ball.style.left = leftBall + 'px';
}

field.addEventListener('click', cord);
