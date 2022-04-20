'use strict';

function mainFunction ( callback) {
    const number = + prompt ( 'Введите первое число:');
    const exponentiation = + prompt ( 'Введите второе число:');
    return callback ( number , exponentiation );
}

function callback ( number , exponentiation ) {
    const callbackResult = number ** exponentiation;
    return alert( callbackResult);
}

mainFunction ( callback );



