const numbers = [1, 3, 5, 8, 9];

const hasEvenNumber = numbers.some(number => number % 2 === 0);

console.log(hasEvenNumber);

const allpositive = numbers.every(number => number >= 0);

console.log(allpositive);