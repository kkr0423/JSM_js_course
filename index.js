import { person, hello, number } from './index.js';
import onlyOneThing from './test.js';

console.log(onlyOneThing); // 'test'

console.log(person); // ['Jim', 'John', 'Jane']
hello(person[0]); // 'Jim says Hello!'
console.log(number); // 3