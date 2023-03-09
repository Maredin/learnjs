"use strict"

/* Напишите функцию sum, которая бы работала следующим образом: */

function sum(a) {
	let result = a;
	function second(b) {
		result += b
		return second;
	}
	second.toString = function() {
		return result;
	  };

	return second;
}


alert( sum(1)(2) ); // == 3; 
alert( sum(1)(2)(3) ); // == 6; 
alert( sum(6)(-1)(-2)(-3) ); // == 0
alert( sum(0)(1)(2)(3)(4)(5) ); // == 15