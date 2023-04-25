//* Задача 7 Необхідно об'єднати два списки даних в один, для цього можна використовувати метод concat ().

const newCars = [
  { brand: `Toyota`, year: 2023 },
  { brand: `Ford`, year: 2023 },
];

const usedCar = [
  { brand: `Fiat`, year: 2019 },
  { brand: `Suzuki`, year: 2017 },
];

const allCarsList = newCars.concat(usedCar);

console.table(newCars);
console.table(usedCar);
console.table(allCarsList);