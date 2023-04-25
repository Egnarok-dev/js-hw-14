//* Задача 6 Необхідно відображати список завдань, які можна відмітити як виконані або невиконані. Для цього можна використовувати метод map ().

const myTasksList = [
    { task: `house cleaning`, done: true},
    { task: `washing-up`, done: false},
    { task: `make home work`, done: true},
    { task: `cooking`, done: true},
]

const completedTasks = myTasksList.map(myTask => myTask)

console.table(completedTasks);

