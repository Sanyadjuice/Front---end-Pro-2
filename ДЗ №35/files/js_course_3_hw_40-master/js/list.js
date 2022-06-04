'use strict';

void function () {
    const formList = "#form";
    const list = JSON.parse(localStorage.getItem(formList))
    const div = document.createElement('div')
    const ul = document.createElement('ul')
    ul.className = "list";

    for (const item in list) {
        const li = document.createElement('li');
        if (list[item] === '') {
            list[item] = 'Нет значения'
            li.innerHTML = `${item} : ${list[item]}`
        } else {
            li.innerHTML = `${item} : ${list[item]}`;
        }
        ul.append(li)
    }
    document.body.prepend(div)
    div.append(ul);
}();
