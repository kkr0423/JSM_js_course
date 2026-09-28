//Global Scope
// const globalVar = "I am global!";

// function showGlobal() {
//   console.log(globalVar);
// }

// showGlobal();

// console.log(globalVar);

// //Function Scope
// function myFunction() {
//   const functionScopedVar = "I am inside the function!";

//   console.log(functionScopedVar);
// }

// myFunction();
// console.log(functionScopedVar); //Syntax Error

//Block Scope
// {
//   const blockVar = 'I am inside of the block';

//   console.log(blockVar);
// }

// console.log(blockVar);


const func1 = () => {
  const withinScope1 = 'SCOPE 1';

  console.log(withinScope1);

  const func2 = () => {
    console.log(withinScope1);
  }
  func2()
}

func1();
