// Always create variable using const keyword first
// if you think, the value of the variable is going to change, then use let keyword

const a = 10;   // variables declared with const are constant

// a = 20;  // error -> assignment to constant variable
/*
.
.
.
long code
*/

console.log(a);

let b = 20;
console.log(b);
b = 30;
console.log(b);

var c = 10; // declaration
c = 20;     // updation
var c = 30; // re-declaration
console.log(c);

let d = 10; // declaration
d = 20;     // updation
// let d = 20; // cannot be re-declared

const e = 10;
// e = 20;          // cannot be updated
// const e = 30;    // cannot be re-declared