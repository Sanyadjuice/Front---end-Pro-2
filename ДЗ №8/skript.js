// Task# 1
// Что вернут следующие строки кода?

    // console.log( Number(’10’) + 1 ); // Uncaught SyntaxError: Invalid or unexpected token
    // console.log(‘sub ’ + Number(false)); // Uncaught SyntaxError: Invalid or unexpected token
    // console.log(16  *  ‘      91    ‘);  // Uncaught SyntaxError: Invalid or unexpected token
    // console.log(true-70);  // -69
    // console.log(Number(1 + String(1)) + 1); // 12


// Task# 2
// Напишите скрипт, который считает количество секунд в часе.
   console.log(60 * 60)
// Запросить у пользователя количество часов
    const hour = prompt("Сколько часов?", )
// Посчитать сколько секунд в этом количестве часов
    console.log(60 * 60 * hour)
// Записать вычесленное значение в переменную
    let secondsInHour = 60 * 60 * hour
// Вывести эту переменную пользователю во всплывающем окне
    alert(secondsInHour)
//
// Task #3
//
// Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, —. Количество строк кода при этом не должно измениться. Код для переделки:
//
let num = 1;
num += 12 ;
num -= 14 ;
num *= 5;
num /= 7;
num ++;
num --;
alert(num);