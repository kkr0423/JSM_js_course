const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const copiedNumbers = numbers;
const clonedNumbers = [...numbers];

numbers.push(11);

console.log(numbers === copiedNumbers);
console.log(numbers === clonedNumbers);

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const clonedNumbers2 = numbers.slice();

console.log(numbers2 === clonedNumbers2);
