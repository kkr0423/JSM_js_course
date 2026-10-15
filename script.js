const person = new Object();
person.lastname = "John";
console.log(person.lastname);
console.log(typeof person);

function Person(name, age, profession) {
  this.name = name;
  this.age = age;
  this.profrssion = profession;
}

const john = new Person("John", 23, "Teacher");
console.log(john.name);
