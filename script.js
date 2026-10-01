let x = 1;
let y = x;

x = 2;

console.log(x, y);

let firstPerson = "John";
let secondPerson = firstPerson;

firstPerson = "Jane";

console.log(firstPerson, secondPerson);

const person = {
  name: "John",
  age: 20,
};

const anotherPerson = person;

anotherPerson.name = "Jane";

console.log(person, anotherPerson);

const animals = ["dog", "cat", "bird"];
const anotherAnimals = animals;

anotherAnimals.push("fish");

console.log(animals, anotherAnimals);
