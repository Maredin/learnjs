"use strict"


/* Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -. */


let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10


function Calculator() {
    this.calculate = function(str) {
        let arr = str.split(' ');

        let a = +arr[0];
        let sign = arr[1];
        let b = +arr[2];

        return this.metod[sign](a, b);
    }
    this.metod = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }


    this.addMethod = function(name, func) {
        this.metod[name] = func;
    }
    console.log(this.metod);
}



/* Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **: */

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

/* Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок. */