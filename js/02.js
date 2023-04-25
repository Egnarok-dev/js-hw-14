//* Задача 2  Створити функцію, яка приймає масив об'єктів і повертає новий масив, який містить тільки об'єкти з певним значенням ключа.

const users = [
    { name: `Anny`, age: 28},
    { name: `John`, age: 29},
    { name: `Bob`, age: 30}
]

const findNameArray = users.map(user => user.name)

console.log(findNameArray);