let a = +prompt('', 2)
let b = +prompt('', 3)

function sum () {
    c = a + b
    return c;
};

function dif () {
    c = a - b
    return c;
};

function sub () {
    c = a * b
    return c;
};

function div () {
    c = a / b
    return c;
};

console.log('Сумма '+ sum(a,b))
console.log('Вычетание ' + dif(a,b))
console.log('Умножение ' + sub(a,b))
console.log('Диление ' + div(a,b))