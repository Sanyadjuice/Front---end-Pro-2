'use strict';

let ary = [1,2,30,4,50,6,7]

//#1
// function myIndexOf(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             return i
//         }
//     }
//     return -1;
// }
//
// console.log(myIndexOf(ary, 30))

//#2
// function myLastIndexOf(arr, value) {
//     for (let i = arr.length; i >= 0; i--) {
//         if (arr[i] === value) {
//             return i
//         }
//     }
//     return -1;
// }
//
// console.log(myLastIndexOf(ary, 3))
// console.log(ary.lastIndexOf(3))

//#3

// function myFind (arr , item) {
//     for ( let i = 0; i < arr.length; i++) {
//         if (item(arr[i] , i , arr)) {
//             return arr[i];
//
//         }
//     }
//     return undefined;
// }
//
// console.log(
//     myFind(ary , function (value){
//         return value === 30;
//     }));
//
// function checkVariable(variable) {
//     return variable === 30;
// }
//
// console.log(ary.find(checkVariable)) ;


//#4
// function myFindIndex (arr , item) {
//     for ( let i = 0; i < arr.length; i++) {
//         if (item(arr[i] , i , arr)) {
//             return i;
//
//         }
//     }
//     return -1;
// }
//
// console.log(
//     myFindIndex(ary , function (value){
//         return value === 30;
//     }));
//
// console.log(ary.findIndex(checkVariable));

//#5

// function myIncludes(arr, searchElement, fromIndex = 0) {
//     for (let i = fromIndex; i < arr.length; i++) {
//         if (searchElement === arr[i]) {
//             return true
//         }
//     }
//     return false
// }
//
// console.log(myIncludes(ary, 30, 1))
// console.log(ary.includes(30,1))

//#6
// let array = [12, 6, 8, 130, 44]
// function arrayElementsEven(currentValue) {
//     return currentValue % 2 === 0
// }
//
// function myEvery(arr) {
//     for (let i = 0; i<arr.length; i++) {
//         if (arrayElementsEven(arr[i]) === false) {
//             return false
//         }
//
//
//     }
//     return true
// }
//
// console.log(array.every(arrayElementsEven))
// console.log(myEvery(array, arrayElementsEven()))

//#7
// let array = [2, 20, 8, 1, 4]
// function moreNumber(currentValue) {
//     return currentValue > 10
// }
//
// function myEvery(arr) {
//     for (let i = 0; i<arr.length; i++) {
//
//         if (moreNumber(arr[i]) === true) {
//             return true
//         }
//
//
//     }
//     return false
// }
//
// console.log(array.some(moreNumber))
// console.log(myEvery(array, moreNumber()))

