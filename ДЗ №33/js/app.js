const arr = [2, 5, 7];
const arr2 = [1, 2, [1.1, 1.2, 1.3], 3];
const arr3 = [1, 2, [1.1, 1.2,[1.21,[11,22],1.22], 1.3], [2, 5, 7], 3];

// void function () {
//
//     let ulCreate = document.createElement('ul')
//
//
//     let generateList = function (array, element) {
//
//         for (let item of array) {
//             let liElem = document.createElement('li')
//             if (Array.isArray(item)) {
//                 let innerUl = document.createElement('ul')
//                 liElem.append(generateList(item, innerUl))
//             } else {
//                 liElem.innerHTML = item
//             }
//             element.append(liElem)
//         }
//     return element
//     }
//     document.body.append(generateList(arr3, ulCreate))
// }()


// let generateList = function generateList (arr) {
//     let ul = document.createElement('ul');
//     arr.forEach(function (elem){
//         let li = document.createElement('li');
//         let childElement = null;
//
//         if (Array.isArray(elem)) {
//             childElement = generateList(elem);
//             console.log(childElement)
//         }else {
//             childElement = document.createTextNode(elem)
//             console.log(childElement)
//         }
//
//         li.appendChild(childElement);
//         ul.appendChild(li);
//     })
//
//     return ul;
// }
//
// document.body.append(generateList(arr3))
// console.log(Array.isArray(arr3))

const generateList = (array) => {

    if (Array.isArray(array)){

        let ulTag = document.createElement('ul');
        document.body.prepend(ulTag);

        for (let i of array) {

            let liTag = document.createElement('li');
            liTag.innerHTML = `${i}`;
            ulTag.append(liTag);

            if (Array.isArray(i)){

                const arrTypeElement = document.querySelector(` body ul li:nth-child(${array.indexOf(i) +1 }) `);
                const ulTag2 = document.createElement('ul');
                ulTag2.id ='inner-ul';
                arrTypeElement.append(ulTag2);

                for (let k of i ){
                    let liTag2 = document.createElement('li');
                    liTag2.innerHTML = `${k}`;
                    ulTag2.append(liTag2);
                }

                document.getElementById('inner-ul').previousSibling.remove();

            }
        }
    } else {
        alert ('error array bad data');
    }
};

generateList(arr2);
