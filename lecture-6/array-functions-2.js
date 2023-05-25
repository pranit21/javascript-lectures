const arr = [1, 2, 3, 4, 5];

// regular for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for-of loop
for (let val of arr) {
    console.log('val', val);
}

// looping through array using forEach function
/* const cb = function(value, index, array) {
    console.log('cb', value);
};
arr.forEach(cb); */

arr.forEach(function(value) {
    console.log('value', value);
});

arr.forEach((value) => console.log('cb', value));

/* const fun = function(value) {
    console.log('fun', value);
};

function forEach(cb) {
    for (let value of arr) {
        cb(value);
    }
}

forEach(fun); */


/* filter function */
const nums = [1, 2, 3, 4, 5];
/* const evenArr = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        evenArr.push(nums[i]);
    }
}
console.log('evenArr', evenArr); */

/* const evenArr = nums.filter(function(value) {
    return value % 2 === 0;
}); */
const evenArr = nums.filter(value => value % 2 === 0);
console.log(evenArr);   // filter function produces new output
console.log(nums);      // actual array is not modified

const products = [
    {
        id: 1,
        name: 'iPhone',
        price: 50000
    },
    {
        id: 2,
        name: 'Pixel',
        price: 25000
    },
    {
        id: 3,
        name: 'Samsung',
        price: 45000
    }
];
console.log(products);
console.log(products[0].price);
// all products with price > 40000

const filteredProducts = products.filter(product => product.price > 40000);
console.log(filteredProducts);

/* map function */
const result = nums.map(value => value * value);
console.log('result', result);
console.log('nums', nums);

/* find function */
const product = products.find(p => p.id === 2);
console.log(product);
console.log(products.find(product => product.price > 40000));   // finds first matching element