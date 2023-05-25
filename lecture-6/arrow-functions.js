(function() {
    var a = 10;
    console.log('Anonymous');
})();   // IIFE (Immediately Invoked Function Expression)

// console.log(a);

// function expression
const fun1 = function() {
    console.log('fun1');
};
fun1();

// arrow function
const fun2 = () => console.log('fun2');
fun2();

/* const sum = function(a, b) {
    return a + b;
} */
const sum = (a, b) => a + b;
console.log(sum(10, 20));

const fun3 = (a, b) => {
    console.log('fun3');
    return a + b;
};
// const result = fun3(10, 20);
// console.log(result);
console.log(fun3(10, 20));

// const square = a => a * a;
// console.log(square(3));