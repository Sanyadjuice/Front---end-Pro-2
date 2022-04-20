'use strict';

function mainFunction ( callback) {
    const numberOne = + prompt ( 'Введите первое число:');
    const numberTwo = + prompt ( 'Введите второе число:');
    return callback ( numberOne , numberTwo );
}

function callbackExponentiation ( numberOne , numberTwo ) {
    const callbackResult = numberOne ** numberTwo;
    return alert( callbackResult);
}

mainFunction ( callbackExponentiation );

function multiply ( numberOne , numberTwo ) {
    const callbackResult = numberOne * numberTwo;
    return alert( callbackResult);
}

mainFunction ( multiply );

function division ( numberOne , numberTwo ) {
    const callbackResult = numberOne / numberTwo;
    return alert( callbackResult);
}

mainFunction ( division );

function modulo ( numberOne , numberTwo ) {
    const callbackResult = numberOne % numberTwo;
    return alert( callbackResult);
}

mainFunction ( modulo );


