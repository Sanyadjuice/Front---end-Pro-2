// У нас есть дерево, структурированное как вложенные списки ul/li.
//
// Напишите код, который выведет каждый элемент списка в консоль :
//
// Вытянуть все атрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого
// атрибута в массив — вывести этот массив в консоль
// Так-же записать в отдельный массив каждое имя атрибута — вывести массив в консоль
// С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
// Добавить первому элементу li атрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
// Удалить у тега ul атрибут ‘data-dog-tail‘

void function () {

    const ul = document.getElementById('ulId');
    console.log(ul);

    const atr = ul.getAttributeNames()
    console.log(atr);

    const newUlArr = [];

    for (let i of atr) {
        newUlArr.push(i);
    }
    console.log(newUlArr)
    let myName = 'Sanya';
    console.log(ul.lastElementChild.innerHTML = `Привет меня зовут ${myName}`);

    ul.firstElementChild.setAttribute('data-my-name', `${myName}`);
    ul.removeAttribute('data-dog-tail');
}();



