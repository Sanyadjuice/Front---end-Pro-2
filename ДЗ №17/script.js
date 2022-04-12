'use strict';


function padString (str, num, symbol, boolean = true) {

    if (typeof str !== 'string') {
        alert('some error is not string')
    }
    if (typeof num !== 'number') {
        return alert('some error is not number')
    }
    if (symbol !== '*') {
        return alert('some error is not symbol')
    }
    if (typeof boolean !== 'boolean') {
        return alert('some error is not boolean')
    }
    if (num > str.length) {
        num -= str.length;
        if (boolean === true) {
            for ( let i = 0; i < num; i++) {
                str += symbol;
            }
        } else {
            for (let y = 0; y < num; y++) {
                str = symbol + str
            }
        }
    } else {
        str = str.substring(0, num)
    }
    return str;
}

console.log(padString('hello', 8, '*'))  //вернет строку hello***

console.log(padString('hello', 6, '*', false)) //вернет строку *hello

console.log(padString('hello', 2, '*')) //вернет ‘he’





