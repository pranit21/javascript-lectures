// <, >, <=, >=, ==, !, !=
// output will always be boolean value
console.log('2 > 1', 2 > 1);    // true
console.log('2 == 1', 2 == 1);    // false
console.log('2 != 1', 2 != 1);    // true

console.log('Z > A', 'Z' > 'A'); // true    // A - 65, Z - 91
console.log('a > A', 'a' > 'A'); // true    // A - 65, a - 92
console.log('Glow > Glee', 'Glow' > 'Glee'); // true

console.log('2' > 1);   // true, string '2' gets converted into number 2
console.log('01' == 1);   // true, string '01' gets converted into number 1

console.log('true == 1', true == 1); // true, true value gets converted into number 1
console.log('false == 0', false == 0); // true, false value gets converted into number 0
console.log('' == false);   // true

// strict equality (===)
console.log('false === 0', false === 0);    // false
// string non-equiliaty (!==)
console.log('false !== 0', false !== 0);    // true

// Always use strict equality (===) operator for comparison instead of ==

console.log('null == undefined', null == undefined);    // true
console.log('null === undefined', null === undefined);  // false