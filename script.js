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

const moreNames = ['Mary', 'Mark', 'Matt'];
const allNames = names.concat(moreNames);
console.log(allNames);//['John', 'Jenny', 'Jane', 'Jim', 'Jill', 'Mary', 'Mark', 'Matt'];

console.log(names.indexOf('Jane'));//1

console.log(names.lastIndexOf('Jane'));//1

console.log(names.includes('Jane'));//true

const foundName = names.find(name => name.length > 4);
console.log(foundName);//'Jenny'

const filteredNames = names.filter(name => name.length > 4);
console.log(filteredNames);//['Jenny', 'Jane', 'Jim', 'Jill'];

