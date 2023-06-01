console.log(Math);
// const PI = Math.PI;
// const E = Math.E;
// const sqrt = Math.sqrt;

// object destructuring
const { PI, E, sqrt } = Math;

console.log(PI);
console.log(E);
console.log(sqrt(9));

const testUser1 = {
    id: 1,
    name: 'Pranit',
    age: 21,
    marks: 90
};

const testUser2 = {
    id: 2,
    name: 'Sanjay',
    age: 20
};

// default value
// const { name, age, marks = 0 } = testUser1;
const { name, age, marks = 0 } = testUser2;

console.log(name);
console.log(age);
console.log(marks);


const circle1 = {
    name: 'CircleX',
    radius: 2,
    precision: 4
};

const circle2 = {
    name: 'CircleY',
    radius: 4
};

// const { radius, name } = circle1;
const circleArea = ({ radius, name, precision = 2 }) => {
    return `${name}: ${(PI * radius * radius).toFixed(precision)}`;
};

console.log(
    circleArea(circle1)
);
console.log(
    circleArea(circle2)
);


console.log('-------Array destructuring-------');
const arr = [1, 2, 3, 4];
// const first = arr[0];
// const second = arr[1];

// const [first, second] = arr;
// console.log(first, second);
// console.log(arr);

const [first, second, , fourth] = arr;
console.log(first, second, fourth);