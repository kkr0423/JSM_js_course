let introduction = ["Hello", "I", "am", "Sarah"];
let [greeting, pronoun] = introduction;

console.log(greeting); // "Hello"
console.log(pronoun); // "I"

let greeting2, pronoun2;
[greeting2, pronoun2] = ["Hello", "I", "am", "Sarah"];

console.log(greeting2); // "Hello"
console.log(pronoun2); // "I"

let [greeting3, ...intro] = ["Hello", "I", "am", "Sarah"];
console.log(greeting3); // "Hello"
console.log(intro); // ["I", "am", "Sarah"]

let [greeting4 = "Hi", name = "Sarah"] = ["Hello"];
console.log(greeting4); // "Hello"
console.log(name); // "Sarah"

let a = 3;
let b = 6;

[a, b] = [b, a];

console.log(a); // 6
console.log(b); // 3

let user = { name2: "Alice", age: 25 };
let { name2, age } = user;

console.log(name2); // "Alice"
console.log(age); // 25

let { name2: userName, age: userAge } = user;
console.log(userName); // "Alice"
console.log(userAge); // 25

let { name3, isAdmin = false } = { name3: "Alice" };
console.log(isAdmin); // false

function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

let user4 = { name: "Bob", age: 30 };
displayUser(user4); // Name: Bob, Age: 30
