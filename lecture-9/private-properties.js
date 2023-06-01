class CoffeeMachine {
    #waterAmount = 0;   // start property name with # to make property private

    // getter method for property waterAmount
    get waterAmount() {
        return this.#waterAmount;
    }
    // setter method for property waterAmount
    set waterAmount(value) {
        if (value > 0) {
            this.#waterAmount = value;
        }
    }

    #power;
    // if you just write getter method, then property becomes read-only
    get power() {
        return this.#power;
    }

    constructor(power) {
        this.#power = power;
        console.log('Coffee machine is created with power', this.#power);
    }

    brewCoffee() {
        console.log('Brewing coffee with', this.#waterAmount);
    }
}

const machine = new CoffeeMachine(100);
// machine.#waterAmount = 200;  // can't access outside of class, because property is private
machine.waterAmount = 200;
console.log(machine.waterAmount);
machine.brewCoffee();

machine.waterAmount = -100; // this is not possible because value is negative
machine.brewCoffee();

machine.power = 50;         // can't change the value of power, becuase it is read-only
console.log(machine.power); // 100