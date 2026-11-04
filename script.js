function calculateTotal(...numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

console.log(calculateTotal(1, 2, 3)); // Expected output: 6
console.log(calculateTotal(1, 2, 3, 4)); // Expected output: 10

function displayInfo(first, second, ...additionalInfo) {
  console.log("First:", first);
  console.log("Second:", second);
  console.log("Additional Info:", additionalInfo);
}

displayInfo("apple", "banana", "cherry", "date", "elderberry");
// First: apple
// Second: banana
// Additional Info: ["cherry", "date", "elderberry"]

function scaleValues(factor, ...values) {
  return values.map((value) => factor * value);
}

const scaledArray = scaleValues(3, 10, 20, 30);
console.log(scaledArray); // [30, 60, 90]

function newStyleFunction(...args) {
  const arrayVersion = args;
  const firstElement = arrayVersion.shift(); // OK, gives the first argument
  return firstElement;
}
