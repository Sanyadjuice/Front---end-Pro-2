'use strict';


function pow (number, exponentiation = 1) {
    if (number === 0 || isNaN(number) || exponentiation === 0 || isNaN(exponentiation)) {
        return alert('some error')
    } else {
        return alert(Math.pow(number, exponentiation))
    }
}
let number = +prompt('Введите число которое нужно возвести в степень',);

let exponentiation = +prompt('Введите число которое нужно возвести в степень');


pow(number, exponentiation) ;


