const init = () => {
  const hobby = "Learing JavaScript";

  const displayHobby = () => {
    console.log(hobby);
  };

  return displayHobby;
};

const myFunc = init();
myFunc();
