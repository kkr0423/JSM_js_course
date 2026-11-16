let numbers = [1, 2, 3, 4, 5];

let sum = 0;

function add(number) {
  sum += number;
}

numbers.forEach(add);

console.log(sum);
