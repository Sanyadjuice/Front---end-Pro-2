'use strict';

// Создайте функцию counter, которая будет создавать счетчик и иметь один необязательный параметр типа number. Вызов
// функции должен возвращать объект (счетчик) с тремя методами: increase, decrease, value.
//
// Вызов метода value должен возвращать текущее значение счетчика, increse – увеличивать его на 1, а decrease –
// уменьшать на 1.
//
// Вызов функции counter должен создавать независимый счетчик – это значит, что вызов методов одного счетчика никак
// не должен влиять на любой другой счетчик.
//
// Необходимо подсчитывать сколько раз были вызваны функции (increase, decrease, get)
// Добавить метод getStatistic который вернет нам объект с данными которые мы подсчитывали в пункте выше.
// Добавить метод, который будет обнулять наш счетчик

const counter = () => {
    let num = null
    let callIncrease = null
    let callDecrease = null
    let counter = null
    const increase = () => {
        num++
        callIncrease++
        counter++
        return {
            num: num,
            callIncrease: callIncrease,
            counter: counter
        }
    }
    
    const decrease = () => {
        num--
        callDecrease++
        counter++
        return {
            num: num,
            callDecrease: callDecrease,
            counter: counter
    }
    }
    
    const value = () => {
        return counter
    }

    const getStatistic = () => {
        return num
    }

    const reset = () => {
      num = null
      callIncrease = null
      callDecrease = null
      counter = null
        return {
            num: num,
            callIncrease: callIncrease,
            callDecrease: callDecrease,
            counter: counter
        }
    }

    return {
        increase,
        decrease,
        value,
        getStatistic,
        reset
    }

}

let counter1 = counter()
console.log(counter1.increase())
console.log(counter1.increase())
console.log(counter1.increase())
console.log(counter1.increase())
console.log(counter1.decrease())

console.log(counter1.value())
console.log(counter1.getStatistic())
console.log(counter1.reset())

console.log(counter1.increase())
console.log(counter1.increase())
console.log(counter1.increase())
console.log(counter1.increase())

