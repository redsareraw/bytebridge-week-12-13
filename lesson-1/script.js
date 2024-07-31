class aClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        alert(this.name);
    }

    sayAge() {
        alert(this.age);
    }
}

const myInstance = new aClass("derek", 36);
myInstance.sayName();



class Car {
    constructor(make, model, year) {
        this._make = make;
        this._model = model;
        this._year = year;
    }

    get make() {
        return this._make;
    }

    set make(value) {
        const possibleMakes = ["Honda", "Toyota", "Nissan"];

        if (possibleMakes.includes(value)) {
            this._make = value;
        } else {
            throw Error(value + " is not a valid make")
        }
    }

    get description() {
        return this._year + " " + this._make + " " + this._model;
    }
}

let myCar = new Car("Toyota", "Camry", 2017);
console.log(myCar.make)

