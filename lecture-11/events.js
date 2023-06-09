function sayHi() {
    alert('Hi');
}

const btn = document.getElementById('elem');
btn.onclick = function() {
    alert('Hi from button 2');
};

const btn1 = document.getElementById('elem1');
btn1.onclick = function() {
    alert('Hi from button 3');
};
// if you apply onclick multiple times on same element
// using attribute or javascript, latest onclick will override all previous onclicks
btn1.onclick = function(event) {
    alert('Hi from button 311111');
    console.log('onclick', event);
};

btn1.addEventListener('click', function(event) {
    console.log('click 1', event);
    console.log('click 1');
});
btn1.addEventListener('click', function(event) {
    console.log('click 2', event);
    console.log('click 2');
});

document.addEventListener('DOMContentLoaded', function() {
    const btn2 = document.getElementById('btn2');
    console.log(btn2);
    btn2.onclick = sayHi;
});

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
div1.onclick = function() {
    alert('div1');
};
div2.onclick = function(event) {
    event.stopPropagation();    // stops bubbling of event to parent
    alert('div2');
};

function callEvent(event) {
    event.preventDefault();     // prevents the default behavior of the element
    alert(event.target.href);
}