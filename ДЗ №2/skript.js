let number1 = +prompt('Number1?');

let number2 = +prompt('Number2?');

let operation = prompt('Operation?');

if (operation==="+") {
    alert('Результат: ' + number1 + operation + number2 + ' = ' + (number1 + number2));
} else if (operation==="-") {
    alert('Результат: ' + number1 + operation + number2 + ' = ' + (number1 - number2));
} else if (operation==="*") {
    alert('Результат: ' + number1 + operation + number2 + ' = ' + (number1*number2));
} else if (operation==="/") {
    if (number2===0) {
        alert('Error!')
    } else
    alert('Результат: ' + number1 + operation + number2 + ' = ' + (number1/number2));
}

 