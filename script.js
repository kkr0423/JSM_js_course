const names = ['John', 'Jane', 'Jim', 'Jill'];
names.push('Jack');//['John', 'Jane', 'Jim', 'Jill', 'Jack'];
console.log(names);//['John', 'Jane', 'Jim', 'Jill', 'Jack'];

const lastName = names.pop();//['John', 'Jane', 'Jim', 'Jill'];
console.log(lastName);//'Jack';

const firstName = names.shift();//['Jane', 'Jim', 'Jill'];
console.log(firstName);//'John';

names.unshift('John');//['John', 'Jane', 'Jim', 'Jill'];
console.log(names);//['John', 'Jane', 'Jim', 'Jill'];

names.splice(1, 0, "Jenny");
console.log(names);//['John', 'Jenny', 'Jane', 'Jim', 'Jill'];