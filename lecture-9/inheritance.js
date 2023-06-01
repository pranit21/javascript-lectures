class Person {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log('Hi ' + this.name);
    }
}

class Student extends Person {
    constructor(name, rollNo) {
        super(name);
        this.rollNo = rollNo;
    }

    sayHello() {
        console.log('Hello, my name is ' + this.name + ', rollNo: ' + this.rollNo);
    }

    sayHi() {
        super.sayHi();
        console.log('Student says hi!');
    }
}

let student1 = new Student('Ajay', 3);
student1.sayHello();
student1.sayHi();