// object constructor
const user = new Object();
user.name = 'Pranit';
console.log(user);

// object literal
const user1 = {
    name: 'Ajay'
};
user1.age = 20
console.log(user1);

delete user1.age;
console.log('after deleting age', user1);

const mystery = "answer";
const user2 = {
    name: 'Pranit',
    age: 24,
    0: 'hello',
    let: 10,
    "likes apples": true,
    [mystery]: 10,              // dynamic/computed property syntax --> [mystery] --> ["answer"]
    [mystery + "Gift"]: 20      // --> "answer" + "Gift" --> "answerGift"
};
console.log('mystery', user2.mystery);  // undefined
console.log('mystery', user2.answer);  // 10
console.log('mystery', user2[mystery]);  // 10
console.log(user2.name);
console.log(user2.age);
console.log(user2.let);
console.log(user2["likes apples"]);
console.log(user2[0]);
console.log(user2["0"]);

// delete user2["likes apples"];    // deletes a property
console.log(user2);

// const key = prompt("What do you want to know about the user?", "name");
// console.log(user2[key]);    // -> user2['name']


function makeUser(name, age) {
    return {
        name,           // name: name --> shorthand property syntax
        age
    };
}

const user3 = makeUser("Pranit", 21);
console.log('user3', user3);

// "in" operator to check whether key/property exists in the object or not
const user4 = {};
console.log("user4.name === undefined", user4.name === undefined);  // true
console.log('"name" in user4', "name" in user4);       // "key" in object

const user5 = {
    name: undefined
};
console.log("user5.name === undefined", user5.name === undefined);  // true
console.log('"name" in user5', "name" in user5);   // true


// for...in ---> loop through keys/properties of the object
for (let key in user2) {
    console.log(key, user2[key]);
}