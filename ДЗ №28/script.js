'use strict';

let calculator = {
    read : function () {
        this.a = +prompt("Введите первое число", )
        this.b = +prompt("Введите второе число", )
        if (isNaN(this.a && this.b)) {
           return alert("Вы ввели не число")
        }
    },
    sum : function () {
        return this.a + this.b
    },

    mul : function () {
        return this.a * this.b
    }

};

calculator.read();
if (isNaN(calculator.sum() && calculator.mul())) {
    alert("Введите число")
} else {
    alert( calculator.sum() );
    alert( calculator.mul() );
}


