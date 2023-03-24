"use strict"

/* Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.

В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто. */

class HttpError extends Error {
	constructor(response) {
	  super(`${response.status} for ${response.url}`);
	  this.name = 'HttpError';
	  this.response = response;
	}
}
  
async function loadJson(url) {
	let response = await fetch(url);

	if (response.status == 200) {
		let json = await response.json();
		return json;
	} else {
		throw new HttpError(response);
	}

}
  
  // Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {

let user;
while(true) {
	let name = prompt("Введите логин?", "iliakan");

	try {
	user = await loadJson(`https://api.github.com/users/${name}`);
	break; // ошибок не было, выходим из цикла
	} catch(err) {
	if (err instanceof HttpError && err.response.status == 404) {
		// после alert начнётся новая итерация цикла
		alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
	} else {
		// неизвестная ошибка, пробрасываем её
		throw err;
	}
	}
}


alert(`Полное имя: ${user.name}.`);
return user;
}

demoGithubUser();