'use strict';

//#1
// let arrOne = [1,2,3]
// let arrTwo = [4,5,6]
// console.log( arrOne.concat(arrTwo))

//#2
// let arrOne = [1,2,3]
// console.log(arrOne.reverse())

//#3
// let arrOne = [1,2,3]
// arrOne.push(4,5,6)
// console.log(arrOne)

//#4
// let arrOne = [1,2,3]
// arrOne.unshift(4,5,6)
// console.log(arrOne)

//#5
// let arrOne = ['js','css','jq']
// alert(arrOne.shift())

//#6
// let arrOne = ['js','css','jq']
// alert(arrOne.pop())

//#7
// let arrOne = [1,2,3,4,5]
// console.log(arrOne.slice(0,3))

//#8
// let arrOne = [1,2,3,4,5]
// console.log(arrOne.slice(3))

//#9
// let arrOne = [1,2,3,4,5]
// arrOne.splice(1,2)
// console.log(arrOne)

//#10
// let arrOne = [1,2,3,4,5]
// console.log(arrOne.splice(1,3))

//#11
// let arrOne = [1,2,3,4,5]
// arrOne.splice(3,0,'a','b','c')
// console.log(arrOne)

//#12
// let arrOne = [1,2,3,4,5]
// arrOne.splice(1,0,'a','b')
// arrOne.splice(6,0,'c')
// arrOne.splice(8,0,'e')
// console.log(arrOne)

//#13
// let arrOne = [3,4,1,2,7]
// arrOne.sort()
// console.log(arrOne)

//#14
// let arrOne = [5,6,7,8,9]
// let sum = 0
// arrOne.forEach(function (elem) {
//     sum += elem;
// });
// alert(sum)

//#15
// let arrOne = [5,6,7,8,9]
// let newArr = [];
// arrOne.forEach(function (elem) {
//     newArr.push(elem * elem)
// })
// alert(newArr)

//#16
// let arr = [1,-3, 5, 6,-7, 8, 9,-11]
// let arr2 = arr.filter((a) => a < 0);
// console.log(arr2)

//#17
// let arrOne = [1,-3, 5, 6,-7, 8, 9,-11]
// function func(elem) {
//     return elem % 2 === 0
// }
// let newArr = arrOne.filter(func)
// console.log(newArr)

//#18
// let arrOne = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']
// function func(elem) {
//     return elem.length > 5
// };
// let newArr = arrOne.filter(func)
// console.log(newArr)

//#19
// let arrOne = [1, 2, [3, 4], 5, [6, 7]]
// function func(elem) {
//     return Array.isArray(elem)
// };
// let newArr = arrOne.filter(func);
// console.log(newArr)

//#20
// let arrOne = [5,-3, 6,-5, 0,-7, 8, 9]
// function func(elem){
//     return elem < 0
// };
// let newArr = arrOne.filter(func);
// console.log(newArr.length)