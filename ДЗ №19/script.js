'use strict';

function mainFunction ( callback) {
    const number = + prompt ( 'Введите первое число:');
    const exponentiation = + prompt ( 'Введите второе число:');
    return callback ( number , exponentiation );
}

function callbackExponentiation ( number , exponentiation ) {
    const callbackResult = number ** exponentiation;
    return alert( callbackResult);
}

mainFunction ( callbackExponentiation );



