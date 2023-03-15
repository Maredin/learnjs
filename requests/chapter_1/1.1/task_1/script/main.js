/* "use strict" */


/* Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.

Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.

В песочнице есть тестовый пример. */

describe("getUsers", function() {

    it("gets users from GitHub", async function() {
      let users = await getUsers(['iliakan', 'remy', 'no.such.users']);
      assert.equal(users[0].login, 'iliakan');
      assert.equal(users[1].login, 'remy');
      assert.equal(users[2], null);
    });
  
  });


async function getUsers(names) {
    let arr = [];
  
    for(let item of names) {
        let job = fetch(`https://api.github.com/users/${item}`).then(
            successResponse => {
                if (successResponse.status != 200) {
                    return null;
                } else {
                    return successResponse.json();
                }
            },
        failResponse => {
          return null;
        }
      );
        arr.push(job);
    }

    let results = await Promise.all(arr);
  
    return results;
}