"use strict"

/* Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант. */

let largeImg = document.querySelector('#largeImg');
let thumbs = document.querySelector('#thumbs');


function click(event) {
	let link = event.target.closest('a');

	if(!link) {
		return;
	}

	addImg(link.href, link.title);

	return false;
}

function addImg(href, title) {
	largeImg.src = href;
	largeImg.title = title;
}


thumbs.onclick = click;
