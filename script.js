const displayData = async () => {
  try {
    const user = await fetchUser("Adrian");
    const photos = await fetchUserPhotos(user);
    const detail = await fetchPhotoDetails(photos[0]);

    console.log(detail);
  } catch (error) {
    console.error(error);
  }
};
