const outer = () => {
  const outerVar = "Hello";

  const inner = () => {
    const innerVar = "Hi";

    console.log(innerVar, outerVar);
  };

  return inner;
};

const innerFn = outer();
innerFn();
