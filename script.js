const names =["John", "Jenny", "Johnny"];

for (let i = 0; i < names.length; i++) {
    console.log(i, names[i]);
}

// Output:
// 0 'Jon'
// 1 'Jenny'
// 2 'Johnny'

names.forEach((value, index) => {
    console.log(index, value);
});

function logArrayElement(element, index) {
    console.log(index, element);
};

names.forEach(logArrayElement);

let sum = 0;
const numbres = [65, 44, 12, 4];

numbres.forEach(number => {
    sum += number;
});

console.log(sum);