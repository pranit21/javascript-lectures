// function declaration
function sayHi() {
    console.log('Hi');
}
sayHi();

// function expression
const greet = function() {  // anonymous function
    console.log('Good evening');
};
greet();


fun1(); // can call a function before declaring it
function fun1() {
    console.log('fun1');
}

// fun2(); // error, cannot access fun2 before initialization
let fun2 = function() {
    console.log('fun2');
};


let age = prompt('Enter your age?');

let welcome;
if (age < 18) {
    welcome = function() {
        console.log('Hello');
    }
} else {
    welcome = function() {
        console.log('Greetings!');
    }
}

welcome();