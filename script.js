const months = ['January', 'February', 'March', 'April'];

console.log(months[0]);//January

months[2] = 'Not March';//['January', 'February', 'Not March', 'April'];

months[4] = 'May';//['January', 'February', 'Not March', 'April', 'May'];

console.log(months.length);//5

const arr = ['Apple', { name: 'John' }, true, function() {
    console.log('hello');
}];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

