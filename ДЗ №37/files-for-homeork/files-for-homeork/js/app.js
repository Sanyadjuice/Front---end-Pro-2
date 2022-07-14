'use strict';


void function () {

    const payLoad = {
        formSelector: '#todoForm',
        todoItemsSelector: '#todoItems',
    };

    const app = controller(
        view(),
        model(),
        payLoad
    );
    app();
}()
