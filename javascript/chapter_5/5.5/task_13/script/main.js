"use strict"

/* 
Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений. */


let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

function groupById(arr) {
  return arr.reduce( (key, value) => {
    
    key[value.id] = value;
    
    return key;
  }, {} )
}

console.log(usersById)

//---------------Второй вариант циклом фор

function group(users) {
  let result = {};

for(let i = 0; i < users.length; i++) {
  result[users[i].id] = users[i];
}

return result;
}

console.log(group(users));


