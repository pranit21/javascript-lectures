// ||, &&, !
console.log(true || true);  // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false);// false

console.log(true && true);  // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false);// false

// OR operator returns first truthy value
console.log(1 || 0);    // 1, since 1 is truthy value
let a = 10;
console.log(2 || (a = 20)); // 2, since 1st value is truthy, next expression is not even evaluated
console.log('a', a);        // and hence value of remains 10

console.log('h' || 10); // h, since string 'h' is truthy value
console.log('' || 10); // 10, since empty string '' is falsy value, so the output is 10

console.log('null || 10', null || 10);    // 10, null is falsy value
console.log(null || undefined || 10);     // 10, null & undefined are falsy
console.log(null || undefined || 0);      // 0, all are falsy, then last value will be returned
console.log(null || 0 || undefined);

/* let username = prompt('Enter your name');
if (username === null || username === '') {
    username = 'Anonymous';
}
console.log(username); */

// let username = prompt('Enter your name');
// console.log(username || 'Anonymous');   // Anonymous

let height = 0;
console.log(height || 10);

// null coalescing (??) - will only return next value if the previous value is null/undefined
let h = 0;
console.log(h ?? 10);   // 0
console.log('null ?? 10', null ?? 10);
console.log('undefined ?? 10', undefined ?? 10);