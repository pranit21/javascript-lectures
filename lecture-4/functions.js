// function declaration
function sayHi() {
    console.log('Hi');
    console.log('Everyone');
}

sayHi();    // calling a function

console.log(sayHi);

const greet = sayHi;    // copy
greet();

// const greet = sayHi();   // when you assign by calling a function, returned value will be assigned to variable
// console.log(greet);     // undefined
// greet();    // error, greet is not a function (because greet is undefined)


// Parameterized functions
function sum(num1, num2) {
    console.log(num1 + num2);
}

sum(10, 20);

function square(num) {
    return num * num;
}

const value = square(3);
console.log(value);

// default parameters
function area(radius, precision = 2) {
    console.log(precision);
    // precision = precision || 0;      // old way, when default parameters were not present
    return (Math.PI * radius * radius).toFixed(precision);
}

console.log('Area of circle -> ', area(4));             // precision is undefined
console.log('Area of circle -> ', area(4, 3));
console.log('Area of circle -> ', area(4, undefined));
console.log('Area of circle -> ', area(4, 0));


function fun1() {
    return 1;
}
console.log(fun1());

function fun2() {
    return;
}
console.log(fun2());

function fun3() {
    return (
        1 + 4 + 57 + 8
        + "hello"
    );
}
console.log(fun3());
