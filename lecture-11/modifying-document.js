// document.createElement   -   To create HTML element/tag
// document.createTextNode  -   To create HTML text node

// creating element
const liEl = document.createElement('li');
liEl.innerHTML = 'hi';
liEl.style.color = 'red';

console.log(liEl);

const messageContainer = document.getElementById('message-container');
// adds the element at the end of container element
messageContainer.append(liEl);

const liEl1 = document.createElement('li');
liEl1.innerHTML = 'hello';
liEl1.style.color = 'red';
// adds the element at the start of container element
messageContainer.prepend(liEl1);

const divEl = document.createElement('div');
divEl.innerHTML = 'before';
// adds the element before the container element
messageContainer.before(divEl);

const divEl1 = document.createElement('div');
divEl1.innerHTML = 'after';
// adds the element after the container element
messageContainer.after(divEl1);

setTimeout(() => {
    // removes the element
    divEl1.remove();
}, 2000);

const menuDiv = document.getElementById('menu');
console.log(menuDiv.className); // className gives you all the classes in string
console.log(menuDiv.classList); // classList is a token list of all classes

// menuDiv.className = 'menu-item'; // this will replace all the existing classes with menu-item class
menuDiv.classList.add('menu-item'); // this will add menu-item class in existing classes
menuDiv.classList.remove('active'); // this will remove active class from existing classes