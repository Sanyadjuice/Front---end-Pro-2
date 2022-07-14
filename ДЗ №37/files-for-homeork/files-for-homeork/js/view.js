'use strict';

function view() {
    const createTodoItem = (data) => {
        console.log(data)
        const wrapperElement = document.createElement('div');
        wrapperElement.classList.add('col-4');
        wrapperElement.setAttribute('data-todo-id', data.id);

        wrapperElement.innerHTML = `
        <div class="taskWrapper">
             <div class="taskHeading">${data.title}</div>
             <div class="taskDescription">${data.description}</div>
             <div>Status:
             <select name="select" data-todo-id="${data.id}">
                <option value="no-status" ${data.select === "no-status" ? "selected" : ""}>Без статуса</option>
                <option value="pending" ${data.select === "pending" ? "selected" : ""}>В работе</option>
                <option value="сompleted" ${data.select === "сompleted" ? "selected" : ""}>Завершен</option>
             </select>
             </div>
             <button class="btn btn-warning remove">Delete</button>
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
