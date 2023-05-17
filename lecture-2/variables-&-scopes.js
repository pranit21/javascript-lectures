// console.log('variables');

// let a = 10;
// var b = 20;
// const c = 30;

// console.log(a, b, c);
// console.log(b);
// console.log(c);

// global scope
var a = 10;
console.log('a', a);

{
    // block scope
    var b = 20; // variables declared with var keyword are NOT block scoped
    let c = 30; // variables declared with let/const keywords are block scoped
}
console.log('b', b);
// console.log('c', c);    // error here -> c is not defined

if (true) {
    // block scope
}

// use let instead of var - since someone can change the value of i from outside
// of for loop if we use var.
for (var i = 0; i < 5; i++) {
    // block scope
}
console.log(i);

function fun1() {
    // function/local scope
    var result = 10 + 20;   // variables declared with var/let/const keyword are function scoped
}

fun1();
// console.log(result);    // error here -> result is not defined