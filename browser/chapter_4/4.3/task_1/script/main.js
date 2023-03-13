"use strict"

/* Создайте интерфейс, позволяющий ввести сумму банковского вклада и процент, а затем рассчитать, какая это будет сумма через заданный промежуток времени. */

/* let result = Math.round(initial * (1 + interest) ** years); */

let moneyBefore = document.querySelector('#money-before');
let moneyAfter = document.querySelector('#money-after');

let form = document.forms.calculator;

calc();

form.money.oninput = calc;
form.months.onchange = calc;
form.interest.oninput = calc;

function calc() {
    let initial = +form.money.value;
    let years = +form.months.value / 12;
    let interest = +form.interest.value * 0.01;   
   
    let result = Math.round(initial * (1 + interest) ** years);
    
    let height = result / initial * 100 + 'px';
    
    //Высота зеленого столбца
    let heightAfter = document.querySelector('#height-after')
    heightAfter.style.height = height;
    
    //Запись результата
    moneyBefore.textContent = initial;
    moneyAfter.textContent = result;
}
