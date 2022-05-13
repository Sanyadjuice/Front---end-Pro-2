'use strict';

function outputRandomly() {
    const arr = [];
    function randomArray() {
        let randomNumber = Math.floor(Math.random() * 100 + 1);
        if (!arr.includes(randomNumber)) {
            arr.push(randomNumber);
        }
    }

    for (let i = 0; arr.length < 100; i ++) {
        randomArray()
    }
    return arr;


}

outputRandomly();
console.log(outputRandomly());