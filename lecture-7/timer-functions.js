/* const timerId = setTimeout(() => {
    console.log('hello');
}, 4000);

setTimeout(() => {
    clearTimeout(timerId);
    console.log('Timer cleared');
}, 2000); */

/* const timerId = setTimeout(() => {
    console.log('hello');
}, 0);
console.log('done');

clearTimeout(timerId); */


const id = setInterval(() => {
    console.log('hello');
}, 1000);

setTimeout(() => {
    clearInterval(id);
}, 5000);