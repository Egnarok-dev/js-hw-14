//* Задача 4 Необхідно відобразити список товарів, відсортований за ціною в порядку зростання або спадання.Для цього можна використовувати метод sort() або reverse().

const listOfProducts = [ 
    { title: `banana`, price: 27},
    { title: `tomato`, price: 30},
    { title: `potato`, price: 12},
    { title: `carot`, price: 17}
]

const sortedProducts = listOfProducts.sort((a, b) => a.price - b.price);

console.log(sortedProducts);