'use strict'
console.log(this)

function ss (a, b) {
    console.log(this)
}

// (function () {
//
//     const table = document.createElement('table');
//
//     let row = document.createElement('tr');
//     let col = document.createElement('td');
//     let number = 1
//
//     for (let i = 0; i < 10; i++) {
//         row = document.createElement('tr');
//         table.append(row)
//         for (let j = 0; j<10 ; j++) {
//             col = document.createElement('td');
//             row.append(col)
//             col.innerHTML = `${number++}`
//         }
//     }
//     document.body.prepend(table)
//     // document.body.prepend(col)
//     // for (let i = 0; i < 100; i++) {
//     //     if ((i + 1) % 10 === 0) {
//     //         let td = document.createElement('td');
//     //         td.innerHTML = `${i + 1}`;
//     //         table.append(row);
//     //         row.append(td);
//     //         row = document.createElement('tr');
//     //     } else {
//     //         const td = document.createElement('td');
//     //         td.innerHTML = `${i + 1}`;
//     //         row.append(td);
//     //
//     //     }
//     //
//     // }
//     // document.body.prepend(table);
//     // table.style.margin = '0 auto'
// })();

