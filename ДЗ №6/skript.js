// 1) с помощью промта спрашиваем у пользователя что он хочет сделать (add, sub, mult, div).
    const operator = prompt("Введите add, sub, mult, div", )
//
//
// 2) с помощью промта спрашиваем у пользователя первое число.
    let a = +prompt("Введите первое число", )
//
//
// 3) с помощью промта спрашиваем у пользователя второе число.
    let b = +prompt("Введите второе число", )
//
//
// 4) С помощью alert или console.log выводим результат действия (add, sub, mult, div) со всеми операндами (Н-р "2 + 3 = 5" )


    if (operator === "add") {
        result = a + b
        console.log(a + "+" + b + "=" + result)
        alert(a + "+" + b + "=" + result)
    } else if (operator === "sub") {
        result = a - b
        console.log(a + "-" + b + "=" + result)
        alert(a + "-" + b + "=" + result)
    } else if (operator === "mult") {
        result = a * b
        console.log(a + "*" + b + "=" + result)
        alert(a + "*" + b + "=" + result)
    } else if (operator === "div") {
        result = a / b
        console.log(a + "/" + b + "=" + result)
        alert(a + "/" + b + "=" + result)
    }  else {
        alert("Вы ввели не add, sub, mult, div")
    }