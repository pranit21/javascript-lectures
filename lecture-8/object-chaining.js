let user1 = {
    address: {
        city: 'Mumbai'
    }
};

// let user2 = {};
// let user2 = undefined;
let user2 = null;

// console.log(user2.address.city);
// console.log(user2.address ? user2.address.city : '');
// console.log(user2.address && user2.address.city);

// ?. -> if the value before ?. is undefined/null, then it will not try to access it's property
console.log(user2?.address?.city);

// ?. -> doesn't work on left hand side of assignment
// document.getElementById('header')?.innerHTML = 'My application';
const headerValue = document.getElementById('header')?.innerHTML;
console.log(headerValue);