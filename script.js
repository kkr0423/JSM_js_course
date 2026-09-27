//Global Scope
const globalVar = "I am global!";

function showGlobal() {
  console.log(globalVar);
}

showGlobal();

console.log(globalVar);

//Function Scope
function myFunction() {
  const functionScopedVar = "I am inside the function!";

  console.log(functionScopedVar);
}

myFunction();
console.log(functionScopedVar); //Syntax Error
