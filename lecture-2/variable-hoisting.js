// console.log(a);
// var a = 10;

// all variables will be hoisted at the top of the file & they are declared with undefined value
var a;
console.log(a);
var a = 10;
console.log(a);

// let b;  // variables with let are hoisted but they are not yet defined (temporal deadzone)
// console.log(b);
// let b = 10;
// console.log(b);

{
    // let b;  // hoisted -> variable b is in temporal deadzone (memory is not allocated yet)
    // console.log(b); // b is still in temporal deadzone
    let b = 10;     // b's temporal deadzone is completed
    console.log(b); // b is not in temporal deadzone
}

{
    var a = undefined;  // hoisted -> variable a is in temporal deadzone (memory is allocated & deadzone of a completed)
    console.log(a); // a is not in temporal deadzone
    var a = 10;
    console.log(a);
}

// convention for writing variable names
const userName = 'Pranit';  // use camel-case
const _userName = 'Pranit'; // _ is allowed
const $userName = 'Pranit'; // $ is allowed
const _ = 'Pranit';
const $ = 'Pranit';
const image1 = 'image.jpg'; // can include numbers
// const 1image = 'image.jpg';  // cannot start with number
// const image-name = '';   // no special character apart from _ and $ is allowed