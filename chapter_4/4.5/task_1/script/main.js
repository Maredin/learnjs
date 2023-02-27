"use strict"

/* Возможно ли создать функции A и B, чтобы new A() == new B()? */

let box = {};

function A() {
    return box;
}

function B() {
    return box;
}

let a = new A();
let b = new B();

alert( a == b );

