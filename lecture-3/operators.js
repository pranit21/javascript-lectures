// unary +, -
const a = 10;
console.log(a, -a);
const b = -20;
console.log(b, -b);

// Math operations
console.log(3 + 2);
console.log(3 - 2);
console.log(3 * 2);
console.log(3 / 2);
console.log(5 % 2);
console.log(4 ** (1/2));
console.log(25 ** (1/3));

// Operator precedence - BODMAS
const val1 = 3 * 4 + 2 * 6 / 2;
// 3 * 4 + 2 * (3)
// (12) + (6)
// 18
console.log(val1);

const val2 = 3 * (4 + 2) * 6 / 2;
// 3 * (6) * 6 / 2
// 3 * 6 * (3)
// (18) * 3
// 54
console.log(val2);

// Assignment operator
let x = 1;
let y = 2;

let z = 3 - (x = y + 1);
console.log('x', x);
console.log('z', z);

// Short hand operators
let p = 10;
p += 20;    // p = p + 20;
console.log('p', p);

// Increment/Decrement (++/--)
let a1 = 10;
a1++;   // a1 = a1 + 1; // post increment
console.log('a1', a1);
a1--;   // a1 = a1 - 1; // post decrement
console.log('a1', a1);
++a1;   // a1 = a1 + 1; // pre increment
console.log('a1', a1);

let a2 = 10;
console.log('a2', a2++);    // 10
console.log('a2', a2);      // 11

let a3 = 10;
console.log('a3', ++a3);    // 11
console.log('a3', a3);      // 11

let a4 = 10;
console.log('a4++', a4++);  // 10
console.log('++a4', ++a4);  // 12
console.log('a4--', a4--);  // 12
console.log('--a4', --a4);  // 10

let a5 = 10;
console.log('++a5', ++a5);  // 11
console.log('a5++', a5++);  // 11
console.log('--a5', --a5);  // 11
console.log('a5--', a5--);  // 11