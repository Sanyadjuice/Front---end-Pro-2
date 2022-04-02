let a = +prompt("Введите число",)
let flag = true
if ( a === 1) {
    flag = false
}

for ( i = 2; i < a ; i++) {
    if  (a % i === 0) {
        flag = false
        break
    }
}
console.log(flag);