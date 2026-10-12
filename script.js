const newElement = document.createElement("div");
newElement.textContent = "Hello, World";
document.body.appendChild(newElement);

const subjects = document.querySelector(".subjects");

console.log(subjects.firstElementChild);
console.log(subjects.lastElementChild);

const favSub = document.querySelector(".fav-subject");

console.log(favSub.previousElementSibling);
console.log(favSub.nextElementSibling);
console.log(favSub.parentElement);

favSub.remove();
