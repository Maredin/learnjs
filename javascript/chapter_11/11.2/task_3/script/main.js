"use strict"
/* 
В задаче Анимированный круг показывается анимированный растущий круг.

Теперь предположим, что нам нужен не просто круг, а чтобы в нём было ещё и сообщение. Сообщение должно появиться после завершения анимации (круг полностью вырос), в противном случае это будет выглядеть некрасиво.

В решении задачи функция showCircle(cx, cy, radius) рисует окружность, но не даёт возможности отследить, когда она будет готова.

В аргументы добавьте колбэк: showCircle(cx, cy, radius, callback) который будет вызываться по завершении анимации. Колбэк в качестве аргумента должен получить круг <div>. */


let btn = document.querySelector('.btn');


btn.onclick = go;

function go() {
    showCircle(150, 150, 100).then(div => {
		div.classList.add('message-ball');
		div.append("Hello, world!");
    });
}


function showCircle(cx, cy, radius){
	let div = document.createElement('div');
	div.style.width = 0 + 'px';
	div.style.height = 0 + 'px';
	div.style.left = cx + 'px';
	div.style.top = cy + 'px';
	div.classList.add('circle');
	document.body.append(div);


	return new Promise((resolve, reject) => {
			setTimeout(() => {
				div.style.width = radius * 2 + 'px';
				div.style.height = radius * 2 + 'px';
				
				div.addEventListener('transitionend', function handler() {
					div.removeEventListener('transitionend', handler);
						resolve(div);
					});
			}, 0);


	});
}

