'use strict';

function findPalindrome(value) {
    let steps = 0;
    function checkNumber(number) {
        const reversedNumber = parseFloat(
            number.toString().split("").reverse().join("")
        );
        if (number === reversedNumber) {
            return {
                steps,
                result: number
            };
        } else {
            ++steps;

            return checkNumber(number + reversedNumber);
        }
    }

    return checkNumber(value);
}

console.log(findPalindrome(96));
console.log(findPalindrome(1221));
console.log(findPalindrome(121));
console.log(findPalindrome(95));
console.log(findPalindrome(97));
console.log(findPalindrome(98));
