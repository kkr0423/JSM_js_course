console.log(1);

const fetchUser = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the user");
      resolve(username);
    }, 2000);
  });
};

const fetchUserPhotos = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the photos");
      resolve(["photo1", "photo2"]);
    }, 2000);
  });
};

const fetchPhotoDetails = (photo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the photo details");
      resolve("details...");
    }, 2000);
  });
};

// Calling the functions with promises
fetchUser("Adrian")
  .then((user) => fetchUserPhotos(user))
  .then((photos) => fetchPhotoDetails(photos[0]))
  .then((detail) => console.log(detail))
  .catch((error) => console.log(error));

console.log(2);
