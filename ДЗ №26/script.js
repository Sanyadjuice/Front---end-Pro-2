'use strict';

function outputRandomly() {
    const arr = [];
    function randomArray() {
        let randomNum = Math.floor(Math.random() * 100 + 1);
        if (!arr.includes(randomNum)) {
            arr.push(randomNum);
        }
    }

    for (let i = 0; arr.length < 100; i ++) {
        randomArray()
    }
    return arr;


}

outputRandomly();
console.log(outputRandomly());


