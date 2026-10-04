const person = {
  name: "John",
  age: 30,
};

const otherPerson = { ...person };

person.age = 31;

console.log(person);
console.log(otherPerson);

const person2 = {
  name: "John",
  age: 30,
};

const anotherPerson = Object.assign({}, person2);

console.log(anotherPerson === person);
