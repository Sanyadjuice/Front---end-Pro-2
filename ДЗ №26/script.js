'use strict';

function randomArray() {
    const arr = [];
    for (let i = 0; arr.length < 100; i ++) {
        let randomNum = Math.floor(Math.random() * 100 + 1);
        if (!arr.includes(randomNum)) {
            arr.push(randomNum);
        }
    }
    return arr;


}

console.log(randomArray());


