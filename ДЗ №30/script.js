'use strict';

// Метод bind

(function () {
    const person = {
        name: 'Sanya'
    }

    function info(phone, email) {
        console.log(`Имя: ${this.name}, Тел.:${phone}, Email: ${email}`)
    }

    function bind(fn, context) {
        console.log(arguments)
        const rest = Array.prototype.slice.call(arguments, 2)
        return function() {
            const args = Array.prototype.slice.call(arguments)
            return fn.apply(context, rest.concat(args))
        }
    }


    bind(info, person)('12345', 'Sanya@ukr.net')
    bind(info, person,'12345')('Sanya@ukr.net')
    bind(info, person,'12345', 'Sanya@ukr.net')()
})()


