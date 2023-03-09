"use strict"

/* Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», игнорируются. */


/* function debounce(f, ms) {
	let stop = false;

	return function(...args) {
		if(stop) {
			return;
		}
		
		stop = true;
		f(...args);
		setTimeout(() => stop = false, ms);
	}
} */

	function f(a) {
		console.log(a)
	}
	
	// f1000 передаёт вызовы f максимум раз в 1000 мс
	let f1000 = throttle(f, 1000);
	
	f1000(1); // показывает 1
	f1000(2); // (ограничение, 1000 мс ещё нет)
	f1000(3); // (ограничение, 1000 мс ещё нет)
	
	// когда 1000 мс истекли ...
	// ...выводим 3, промежуточное значение 2 было проигнорировано

	function throttle(func, ms) {

		let stop = false,
		savedArgs,
		savedThis;
	
		function wrapper() {
	
		if (stop) { // (2)
			savedArgs = arguments;
			savedThis = this;
			return;
		}
	
		func.apply(this, arguments); // (1)
	
		stop = true;
	
		setTimeout(function() {
			stop = false; // (3)
			if (savedArgs) {
			wrapper.apply(savedThis, savedArgs);
			savedArgs = savedThis = null;
			}
		}, ms);
		}
	
		return wrapper;
	}