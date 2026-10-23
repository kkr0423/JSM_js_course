const fetchUser = (username, callback) => {
  setTimeout(() => {
    console.log("Now we have the user");
    callback({ user: username });
  }, 2000);
};

fetchUser("test", (user) => {
  console.log(user);
});
