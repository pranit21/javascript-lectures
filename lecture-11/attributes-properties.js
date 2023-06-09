// <body id="page1">    id -> attribute
// body.id = "page1";   id -> property

// we can add our own custom data to any dom element
document.body.myData = {
    name: 'abc'
};
console.log(document.body.myData);

// we can also add our own function to any dom element
document.body.sayHi = () => {
    console.log('Hi');
}

console.log(document.body.id);  // page1
// non-standard attributes does not yield any property in DOM
console.log(document.body.something);   // undefined

// Standard & Non-standard attributes can be retrieved using following functions:
// hasAttribute(name) - checks whether attribute exists or not
// getAttribute(name) - get the value of attribute name
// setAttribute(name, value) - set the value of attribute name
// removeAttribute(name) - remove the attribute name

console.log(document.body.hasAttribute('id'));  // true
console.log(document.body.hasAttribute('something'));  // true
console.log(document.body.getAttribute('something'));  // non-standard

// DOM properties are typed
const myDiv = document.getElementById('my-div');
console.log(myDiv.style);
console.log(myDiv.getAttribute('style'));

const myInput = document.getElementById('my-input');
console.log(myInput.checked);
console.log(myInput.getAttribute('checked'));