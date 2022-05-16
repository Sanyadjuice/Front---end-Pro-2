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