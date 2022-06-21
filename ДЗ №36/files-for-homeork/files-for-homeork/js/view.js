'use strict';

function view() {
    const createTodoItem = (data) => {
        const wrapperElement = document.createElement('div');
        wrapperElement.classList.add('col-12');
        wrapperElement.setAttribute('data-todo-id', data.id);

        wrapperElement.innerHTML = `
        <div class="taskWrapper">
             <div class="taskHeading">${data.title}</div>
             <div class="taskDescription">${data.description}</div>
             <button class="btn btn-warning">Delete</button>
        </div>
        `;
        return wrapperElement;
    }
    return {
        form: null,
        todoContainer: null,

        renderTodoItem(data) {
            const itemTemplate = createTodoItem(data);
            this.todoContainer.append(itemTemplate);
        },

        removeTodoItems(id) {
            document.querySelector(`[data-todo-id = '${id}']`).remove();
        },

        clearForm() {
            this.form.reset();
        },

        init(formElement, todoContainer) {
            this.form = formElement;
            this.todoContainer = todoContainer;
        }

    }
}
