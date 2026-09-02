const months = ['January', 'February', 'March', 'April'];

console.log(months[0]); // 'January'

months[2] = 'Not March'; // [ 'January', 'February', 'Not March', 'April' ]

console.log(months.length); // 5

const arr = [
    'Apple',
    { name: 'John' },
    true,
    function() {
        console.log('hello');
    }
];

for (let i = 0; i < months.length; i++) {
    console.log(months[i]);
}