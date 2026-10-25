const fetchUser = (username, callback) => {
  setTimeout(() => {
    console.log("Now we have the user");
    callback(username);
  }, 2000);
};

const fetchUserPhotos = (username, callback) => {
  setTimeout(() => {
    console.log("Now we have the photos");
    callback(["photo1", "photo2"]);
  }, 2000); // Simulating a delay
};

const user = fetchUser("test", (username) => {
  console.log(username);

  fetchUserPhotos(username, (userPhotos) => {
    console.log(userPhotos);
  });
});
