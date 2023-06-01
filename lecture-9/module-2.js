import { sayHi, sayHello, PI } from './module-3.js';
import * as module3 from './module-3.js';
import User from './module-3.js';

// console.log(a);  // error, because a is not exported
console.log(PI);
sayHi();
sayHello();

module3.sayHi();

console.log(User);