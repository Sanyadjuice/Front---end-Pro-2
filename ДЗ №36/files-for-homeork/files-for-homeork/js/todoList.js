'use strict'



document.getElementById('todoForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const inputs = event.target.querySelectorAll('input, textarea')

    const todoItem = {};

    for (let input of inputs) {
        if (input.value.trim() === '') return alert('Вы не ввели данные');
        console.log(input.attributes)
        todoItem[input.name] = input.value;
    }
    console.log(todoItem)
    event.target.reset();
})
