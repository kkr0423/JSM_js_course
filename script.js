const person = {
  name: "John",
  car: {
    brand: "BMW",
    color: "blue",
    wheels: 4,
  },
};

// const newPerson = { ...person };
const newPerson = JSON.parse(JSON.stringify(person));

newPerson.name = "Mike";
newPerson.car.color = "red";

console.log(person, newPerson);
