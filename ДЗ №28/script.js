'use strict';

const counter = () => {
    let a = 0;
    let bIncrease = 0;
    let bDecrease = 0;
    let bReset = 0;
    let bValue = 0;
    const increase = () => {
        const get = () => {
            return bIncrease+= 1;
        }
        return [`Значение счетчика: ${a+=1}`, `Метод increase был вызван ${get()} раз`];
    }
    const decrease = () => {
        const get = () => {
            return bDecrease+= 1;
        }
        return [`Значение счетчика: ${a-=1}`, `Метод decrease был вызван ${get()} раз`];
    }
    const reset = () => {
        const get = () => {
            return bReset+= 1;
        }
        return [`Значение счетчика: ${a = 1}`, `Метод reset был вызван ${get()} раз`];
    }
    const value = () => {
        const get = () => {
            return bValue+= 1;
        }
        return [`Значение счетчика: ${a}`, `Метод value был вызван ${get()} раз`];
    }
    return {
        increase,
        decrease,
        reset,
        value
    };
}
let counterMath = counter();
counterMath.increase();
counterMath.increase();
counterMath.increase();
counterMath.increase();
counterMath.increase();
counterMath.increase();
counterMath.increase();

console.log(counterMath.increase());
console.log(counterMath.decrease());
console.log(counterMath.reset());
console.log(counterMath.value());