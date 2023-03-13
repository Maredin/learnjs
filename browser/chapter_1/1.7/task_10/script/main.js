"use strict"

/* Напишите код для сортировки по столбцу "name". */

let table = document.querySelector('table');

let sort = Array.from(table.rows)
  .slice(1)
  .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

table.tBodies[0].append(...sort);

