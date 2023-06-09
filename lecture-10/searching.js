// getElement* or querySelector*

const menuEl = document.getElementById('menu');
console.log('first element with id menu', menuEl);

console.log(menuEl.id);

setTimeout(() => {
    menuEl.style.backgroundColor = 'yellow';
}, 2000);

const menuItems = document.getElementsByClassName('menu-item');
console.log('all li.menu-item elements', menuItems);

const liItems = document.getElementsByTagName('li');
console.log('all li elements', liItems);

console.log('all li.menu-item elements inside ul.menu', menuEl.getElementsByClassName('menu-item'));


console.warn('------querySelector-----');
// querySelector supports css type selector
console.log(document.querySelector('#menu'));   // select first element by id
console.log(document.querySelectorAll('#menu'));    // select all elements by id
console.log(document.querySelector('.menu-item'));  // select first element by class
console.log(document.querySelectorAll('.menu-item'));   // select all elements by class
console.log(document.querySelector('li'));      // select first element by tag name
console.log(document.querySelectorAll('li'));   // select all elements by tag name
console.log(document.querySelectorAll('li.menu-item')); // select all elements by li tag having menu-item as class