'use strict';
const arr = [2, 5, 7];
const arr2 = [1, 2, [1.1, 1.2, 1.3], 3];
const arr3 = [1, 2, [1.1, 1.2,[1.21,[11,22],1.22], 1.3], [2, 5, 7], 3];

void function () {
    let generateList = function generateList (arr) {
        // console.log(arr)
        let ul = document.createElement('ul');
        arr.forEach(function (elem){
            // console.log(elem)
            let li = document.createElement('li');
            let childElement = null;

            if (Array.isArray(elem)) {
                childElement = generateList(elem);

            }else {
                childElement = document.createTextNode(elem)
            }
            // function getRandomColor() {
            //     let letters = '0123456789ABCDEF';
            //     let color = '#';
            //     for (let i = 0; i < 6; i++) {
            //         color += letters[Math.floor(Math.random() * 16)];
            //     }
            //     return color;
            // }
            li.appendChild(childElement);
            li.style.listStyleType = 'none'
            // li.style.color = `${getRandomColor()}`
            ul.appendChild(li);
        })

        return ul;
    }
    document.body.append(generateList(arr3))
}();




