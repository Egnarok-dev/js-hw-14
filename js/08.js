//* Задача 8 Необхідно розбити текст на окремі слова для подальшої обробки. Для цього можна використовувати метод split ().

const text = `У норі попід землею жив собі гобіт. Ні, не в бридкій брудній вологій норі, де звідусіль стирчать хвости хробаків і смердить тванню, але й в не сухій і порожній піщаній норі, де ні на що присісти й нічого з'їсти: то була гобітська нора, а отже, - з усіма вигодами.`
console.log(text);

const splitedText = text.split(' ');

console.log(splitedText);