// Boolean
const a = true;
const b = false;
console.log(a);
console.log(b);

// object
const obj = {    // object literal
    key1: 'Val1',
    name: 'Pranit',
    x: 10,
    y: true,
    val1: {
        a: 20,
        b: 30
    },
    0: 50,
    true: 70
};
console.log(obj);
console.log(obj.key1);
console.log(obj.name);
console.log(obj['x']);
console.log(obj.x);
console.log(obj.val1.a);
console.log(obj['0']);
console.log(obj['true']);

console.log(typeof a);
console.log(typeof obj);

// null
const x = null;
console.log(x);

// undefined
let y;
console.log(y);
y = undefined;
console.log(y);

console.log(typeof x);
console.log(typeof y);