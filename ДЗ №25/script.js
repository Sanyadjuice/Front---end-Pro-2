'use strict';

//#1
(function () {
    const Adder = function () {
        let res = null
        return function (a) {
            res += a
            return res
        }
    }
    const sum = Adder()
    const sum2 = Adder()
    console.log(sum(1))
    console.log(sum(0))
    console.log(sum(5))
    console.log(sum2(10))
    console.log(sum2(10))
    console.log(sum2(10))
})();



