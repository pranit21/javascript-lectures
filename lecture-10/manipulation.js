const parent = document.getElementById('parent');
console.log(parent.innerHTML);      // text along with html
console.log(parent.textContent);    // text content

const child1 = document.getElementById('child1');
console.log(child1.innerHTML);
setTimeout(() => {
    // innerHTML will add content along with HTML
    child1.innerHTML = '<b>Hello Javascript</b>';
    console.log(child1.innerHTML);
}, 2000);

const child2 = document.getElementById('child2');
console.log(child2.textContent);
setTimeout(() => {
    // textContent will treat the content as a string,
    // so no HTML will be rendered
    child2.textContent = '<b>Hello Javascript</b>';
    console.log(child2.textContent);
}, 2000);