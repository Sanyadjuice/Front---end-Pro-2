'use strict';

//#1
// let arr = ['a','b','c','d']
// alert(arr[0]+'+'+arr[1]+', '+ arr[2]+'+'+arr[3])

//#2
// let arr = [2,5,3,9]
// let result = arr[0]*arr[1]+arr[2]*arr[3]
// alert(result)

//#3
// let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]
// let arr2 = arr.flat()
// console.log(arr2[3])

//#4
// let object = {
//     js:['jQuery', 'Angular'],
//     php: 'hello',
//     css: 'world'
// }
// alert(object.js[0])

//#5
// let arr = [];
// let str = 'x';
// for (let i = 0; i<5;i++) {
//     arr.push(str);
//     str = str + 'x'
// }
// console.log(arr)

//#6
// let arr = []
// for (let i = 1; i < 10 ; i++) {
//     let str = '';
//     for (let a = 0; a < i; a++) {
//         str += i
//     }
//     arr.push(str)
// }
// console.log(arr)

//#7
// let arr = []
// function arrayFill (str, length) {
//     for (let i = 0; i < length; i++) {
//         arr.push(str)
//     }
//     return arr
// }
//
// arrayFill('x', 5)
// console.log(arr)

//#8
// let arr = [1,20,3]
// let sum = null
// function sumOfArrays(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         if (sum > 10) {
//             return i + 1
//         }
//     }
// }
// alert(sumOfArrays(arr))

//#9
// let arr = [1, 3, 5, 6, 7, 9];
// let newArr = [];
//
// function reversArr(arr) {
//         for (let i = arr.length - 1; i >= 0; i--) {
//                 newArr.push(arr[i]);
//         }
//         return  newArr
// }
//
// console.log(reversArr(arr));

//#10
// let arr = [[1, 2, 3], [4, 5], [6]]
// let arr2 = arr.flat()
// let sum = null
// for (let i = 0; i < arr2.length; i++) {
//         sum += arr2[i]
// }
// console.log(sum)

//#11
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
// let arr2 = arr.flat(Infinity)
// let sum = null
// for (let i = 0; i < arr2.length; i++) {
//         sum += arr2[i]
// }
// console.log(sum)