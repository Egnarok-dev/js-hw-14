//* Задача 5 Необхідно відобразити список товарів, які відповідають певному критерію цін. Для цього можна використовувати метод filter (), потім дати на них знижку 10%.

const listOfProducts = [ 
    { title: `banana`, price: 27},
    { title: `tomato`, price: 30},
    { title: `potato`, price: 12},
    { title: `carot`, price: 17}, 
]

const filteredProductsAtPrice = listOfProducts.filter(product => product.price > 15 && product.price <= 28).map(product => product.price - product.price * 0.10)

console.log(`Ціни зі знижкою, становлять: ${filteredProductsAtPrice}`);