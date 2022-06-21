"use strict";

void (function () {
    const formSelector = "#form";
    const form = document.querySelector(formSelector);

    const submitHandler = (event) => {
        event.preventDefault();

        const inputs = event.target.querySelectorAll("input, textarea, select");
        const data = {};

        for (const input of inputs) {
            data[input.name] = input.value;
        }

        localStorage.setItem(formSelector, JSON.stringify(data));
        window.location.href = './html/list.html'
    };

    const loadHandler = () => {
        if (!localStorage.getItem(formSelector)) return;

        const inputs = form.querySelectorAll("input, textarea, select");
        const data = JSON.parse(localStorage.getItem(formSelector));


        for (const input of inputs) {
            input.value = data[input.name];
        }
    };

    form.addEventListener("submit", submitHandler);

    document.addEventListener("DOMContentLoaded", loadHandler);
})();
