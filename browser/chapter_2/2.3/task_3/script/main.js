"use strict"

/* Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу. */

let grid = document.querySelector('#grid');

grid.addEventListener('click', (e) => {
    if (e.target.tagName != 'TH') return;

    let th = e.target;

    sortGrid(th.cellIndex, th.dataset.type);
});



function sortGrid(colNum, type) {
    let tbody = grid.querySelector('tbody');

    let rowsArray = Array.from(tbody.rows);

    
    let result;

    if(type == 'number'){
        result = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
        };
    }else if(type == 'string') {
        result = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
        };
    }


    rowsArray.sort(result);

    tbody.append(...rowsArray);
}