var age = 20;
console.log(age); //20
var age = 21;
console.log(age); //21

let age2 = 22;
console.log(age2); //22
// let age2 = 23;
// console.log(age2);//SyntaxError: Identifier 'age2' has already been declared

const password = "123456";
password = "1234567890"; //TypeError: Assignment to constant variable.

let password2 = "1234567890";
password = "1234567890"; //Allowed

function multiply(x) {
  return x * x;
}

// Arrow function
const multiply = (x) => x * x;

const add = (x = 1, y = 2, z = 10) => {
  return x + y + z;
};

//Default Parameters
console.log(add(10, 3)); // 23

const customer = "John";
const order = {
  name: "ipad",
  price: 1000,
};

//Template Literals
const message = `hello ${customer} your order is ${order.name} and the price is ${order.price}`;
