//* Задача 3 Створити функцію, яка приймає масив об'єктів з ключами "name" та "age" і повертає новий масив, який містить тільки імена людей старших за 18 років.

const users = [
    { name: `Anny`, age: 17},
    { name: `John`, age: 29},
    { name: `Bob`, age: 25},
    { name: `Lucene`, age: 12}
]

const filterUsers = users.filter(user => user.age > 18).map(user => user.name)
console.log(filterUsers);