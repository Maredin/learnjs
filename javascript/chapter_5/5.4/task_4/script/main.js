"use strict"

/* На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму. */



function getMaxSubSum(arr) {
    let sum = 0;
    let step = 0
    for(let item of arr) {
        step += item;
        sum = Math.max(sum, step);
        if(step < 0){
            step = 0;
        }
    }
    return sum;
}


console.log( getMaxSubSum([-1, 2, 3, -9]) ) //== 5 
console.log( getMaxSubSum([2, -1, 2, 3, -9]) ) //== 6
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ) //== 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ) //== 3
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ) //== 100
console.log( getMaxSubSum([1, 2, 3]) ) //== 6 
console.log( getMaxSubSum([-1, -2, -3]) ) //== 0

