const arr = [1, 2, 3, 4, 5];

let sum = null
// for ( let i  = 0 ; i < arr.length; i++) {
//     console.log(arr[i])
//     sum += arr[i] * arr[i];
//     // console.log(sum)
// }

for ( let i  = 0 ; i < arr.length; i++) {
    sum += Math.pow(arr[i], 2);
}

console.log(sum)