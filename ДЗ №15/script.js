'use strict'
let num = +prompt("Введите число", )

if (isNaN(num)) {
    alert("Введите число")
} else if (num < 1) {
    alert(NaN)
} else {
    for ( let i = 2; i < num; i++){
        if (num % i === 0) {
            num = i;
            break;
        }

    }

}
alert(`Найменьший делитель ${num}`);

