//*Задача 1 Створити функцію, яка приймає масив чисел і повертає новий масив, який містить тільки непарні числа.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(oddNumbers);