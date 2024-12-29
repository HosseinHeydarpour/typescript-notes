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

  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {}

  private secretMethod() {
    console.log("SECRETTTT!");
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("score is negative");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;

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
// elton.score = -99; this will throw an error but Type script wont intercept this error

// elton.score = 'cm'; This will have error too but typescript can intercept this

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}
class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}

  print(): void {
    console.log(`${this.color}, ${this.brand}`);
  }
}

const jacket1 = new Jacket("Parada", "black");
const bike1 = new Bike("red");

// We cannot define functionallities like greet in the abstract class in an interface
interface Payable {
  getPay(): number;
}

// We cannot create a new inctance of cat
abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log("hello");
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee("Betty", "White", 95999);

console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "Billson", 24, 100);

console.log(bill.getPay());
