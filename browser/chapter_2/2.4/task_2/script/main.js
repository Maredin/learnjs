"use strict"

/* Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке. */


let contents = document.querySelector('#contents');

function ascLink(event) {
	function asc() {
		let resultConfirm = confirm('Вы действительно хотите покинуть страницу', '');

		if(!resultConfirm){
			return false
			}
	}

	let target = event.target.closest('a');

	if (target && contents.contains(target)) {
		return asc();
	}
}

contents.onclick = ascLink;


// При статичной верстке
/* 
let link = document.querySelectorAll('#contents p a');

function asc() {
  let resultConfirm = confirm('Вы действительно хотите покинуть страницу', '');
  
  if(!resultConfirm){
    return false
  }
}

for(let item of link){
  item.onclick = asc;
} */