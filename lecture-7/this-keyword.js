console.log(this);

function sayHi() {
    console.log('sayHi', this);
}
sayHi();

const sayHello = () => {
    console.log('sayHello', this);
}
sayHello();

const user = {
    name: 'Pranit',
    age: 20,
    sayHi: function() {
        console.log('sayHi in user', this);  // this will print the object who is calling sayHi function
    },
    sayHello: () => {   // there is no this in arrow functions
        console.log('sayHello in user', this);  // this will print the object in the context in which it is being called
    }
};
user.sayHi();
user.sayHello();


const group = {
    title: 'Mr',
    userNames: ["Pranit", "Swapnil", "Ajay", "Vijay"],
    showUsers: function() {
        // console.log(this.title);
        this.userNames.forEach(function(name) {
            console.log(this.title + ' ' + name);
        });
        this.userNames.forEach((name) => {
            console.log(this.title + ' ' + name);
        });
    }
};
group.showUsers();