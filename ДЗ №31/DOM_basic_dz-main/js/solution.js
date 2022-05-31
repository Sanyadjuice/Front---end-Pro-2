'use strict';
    // У нас есть дерево, структурированное как вложенные списки ul/li.
    //
    // Напишите код, который выведет каждый элемент списка в консоль :
    //
    // Используйте цикл for..of
    // Вывести общее кол-во элементов в консоль
    // Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив —
    // вывести этот массив в консоль




const array = [];
const ul = document.body.firstElementChild.children;
let sumElem = 0;
for(let list of ul) {
    console.log(list)
    array.push(list.innerHTML);
    sumElem +=1;
}

console.log(sumElem);
console.log(array);