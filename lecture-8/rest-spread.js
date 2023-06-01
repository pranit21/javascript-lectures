// ... => rest/spread operator
// when ... are used on the left hand side of assignment operator it is called as rest operator
// when ... are used on the right hand side of assignment operator it is called as spread operator
const arr = [1, 2, 3, 4];
const [first, second, ...restOfEl] = arr;   // rest element should be at the last in destructuring
console.log(first, second);
console.log(restOfEl);

const testObj = {
    temp1: 10,
    temp2: 20,
    name: 'Pranit',
    temp3: 30,
    age: 20,
    rollNo: 2
};

const { temp1, temp2, temp3, ...person } = testObj;
console.log(person);

function fun1(val1, ...args) {
    console.log(val1);
    console.log(args);
}

fun1(10, 20, 30, 40);


console.log('-----spread-----');
// const student = person; // NOT a clone/copy
// console.log(student);
// console.log(person);
// student.age = 25;
// console.log('student', student);
// console.log('person', person);

const student = {
    // name: 'Dipak',
    ...person,      // clone/copy
    gender: 'Male', // add new property
    name: 'Dipak'   // override existing property
};
student.age = 25;
console.log('student', student);
console.log('person', person);

const arr1 = [20, 30];
const arr2 = [...arr1];
arr2[1] = 40;
console.log('arr1', arr1);
console.log('arr2', arr2);

const arr3 = [40, 50];
const arr4 = [10, ...arr1, 35, ...arr3, 60];
console.log(arr4);