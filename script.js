const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

console.log(person.firstName); // "John"

// Adding a new property
person.dog = { name: "Mike", age: 3 };

// Updating an existing property
person.age = 25;

console.log(person);

console.log(person["firstName"]); // "John"

const property = "age";
console.log(person[property]);
