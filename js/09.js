//* Задача 9 у нас є масив об'єктів, який містить інформацію про студентів, зокрема їх оцінки з різних предметів. Необхідно обчислити середній бал кожного студента і вивести його на екран.

const students = [
  {
    name: `John`,
    grades: {
      math: 6,
      history: 11,
      geography: 10,
    },
  },
  {
    name: `Amy`,
    grades: {
      math: 11,
      history: 11,
      geography: 8,
    },
  },
  {
    name: `Boby`,
    grades: {
      math: 11,
      history: 6,
      geography: 7,
    },
  },
];

function summGrades(grades) {
    let gradeValues = Object.values(grades);
    const sum = gradeValues.reduce((acc, curr) => acc + curr, 0);
    const average = sum / gradeValues.length;
    return average;
    
}

students.forEach(student => {
    const averageGrade = summGrades(student.grades);
    console.log(`${student.name}: ${averageGrade}`);
  });

 