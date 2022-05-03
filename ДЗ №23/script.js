'use strict';

//#1
(function () {
    const getFactorial = (a) => (a !== 1) ? a * getFactorial(a - 1) : 1
    console.log(getFactorial(5))
})();



//#2
(function () {
    const pow = (num, degree) => (degree === 1) ? num : (num * pow(num, degree - 1))
    console.log(pow(2,2))
})();

//#3
(function () {
    const sum = (a,b) => (b === 0) ? a : sum(a + 1 , b - 1)
    console.log(sum(10,2))
})();