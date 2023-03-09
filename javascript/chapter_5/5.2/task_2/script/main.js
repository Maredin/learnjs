"use strict"

/* Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону. */

let result = 6.35;


result = Math.round( result * 10 ) / 10;

alert(result);