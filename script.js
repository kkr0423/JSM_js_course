const functionOne = () => {
  console.log("Function One"); // 1

  functionTwo();

  console.log("Function One, Part 2"); // 2
};

const functionTwo = () => {
  setTimeout(() => console.log("Function Two"), 2000); // 3
};

functionOne();

// Output:
// Function One
// Function One, Part 2
// (after a two-second delay)
// Function Two
