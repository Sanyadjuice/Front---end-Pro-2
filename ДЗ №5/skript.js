//Task #1
//     Создайте пустой объект user.
    const user = {};
//     Добавьте свойство name со значением John.
    user.name = 'John';
//     Добавьте свойство surname со значением Smith.
    user.surname = 'Smith';
//     Измените значение свойства name на Pete.
    user.name = 'Pete';
//     Удалите свойство name из объекта.
    delete user.name

//     Task #2
// Можно ли изменить объект, объявленный с помощью const?
// Да
// const user = {
//
//     name: «John»
//
// };
//
// // это будет работать?
// нет, здесь не правильные кавычки
// user.name = «Pete»;
//
//
//
// Task #3
// У нас есть объект, в котором хранятся зарплаты нашей команды:
//
    let salaries = {

        John: 100,

        Ann: 160,

        Pete: 130

    }
//
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum
    let sum = salaries.John + salaries.Ann + salaries.Pete
    console.log(sum)