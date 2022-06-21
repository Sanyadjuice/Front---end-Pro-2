'use strict';

function controller(view, model, payLoad) {
    const formSelector = payLoad.formSelector;
    const todoContainerSelector = payLoad.todoItemsSelector;


    const form = document.querySelector(formSelector);
    const todoContainer = document.querySelector(todoContainerSelector);


    model.init(formSelector);
    view.init(form, todoContainer);

    const fetchFormData = inputs => {
        let data = inputs;

        if (inputs instanceof NodeList) {
            data = Array.from(inputs);
        }

        return data.reduce((acc, item) => {
            acc[item.name] = item.value;
            return acc
        }, {} )
    }

    const loadHandler = () => {

        const todoItems = model.getData()
        if (!todoItems) return;

        todoItems.forEach(item => view.renderTodoItem(item))

    }


    const submitHandler = event => {
        event.preventDefault();
        event.stopPropagation();
        const inputs = form.querySelectorAll('input, textarea');

        const data = model.setData(fetchFormData(inputs));

        if (!data.success) throw new Error('Is not saving data');

        view.renderTodoItem(data.savedData)
        view.clearForm();

    }

    const removeTodoHandler = (event) => {
        event.stopPropagation();
        if(!event.target.classList.contains('remove')) return;
        let todoId = event.target.closest('[data-todo-id]').getAttribute('data-todo-id');
        todoId = Number(todoId);
        console.log(todoId)

        model.removeTodoItems(todoId);
        view.removeTodoItems(todoId);
    }




    window.addEventListener('DOMContentLoaded', loadHandler)
    form.addEventListener('submit', submitHandler);
    todoContainer.addEventListener('click', removeTodoHandler)


    return {}


}


