"use strict";
// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   // #score: number; This is real JS
//   private score = 0;
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//     // this.score = 0;
//     this.secretMethod();
//   }
//   private secretMethod() {
//     console.log("SECRETTTT!");
//   }
// }
class Player {
    // private score = 0;
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("SECRETTTT!");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("score is negative");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 9999;
    }
}
const elton = new Player("Elton", "Steele", 100);
console.log(elton);
console.log(elton.fullName);
// elton.score = 2; // This will have error because it is private
// elton.secretMethod(); // Thiis will have error in TS bacuase it is private
// elton.fullName '0ada'; this will have error
console.log(elton.score);
elton.score = 99;
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color}, ${this.brand}`);
    }
}
const jacket1 = new Jacket("Parada", "black");
const bike1 = new Bike("red");
// We cannot create a new inctance of cat
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("hello");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee("Betty", "White", 95999);
console.log(betty.getPay());
const bill = new PartTimeEmployee("Bill", "Billson", 24, 100);
console.log(bill.getPay());
