/******************************* */
// * 001 Introducing Interfaces
/****************************** */
type Point = {
  x: number;
  y: number;
};

const pt: Point = {
  x: 1,
  y: 2,
};

interface Point2 {
  x: number;
  y: number;
}

const p2t: Point2 = {
  x: 23,
  y: 34,
};

/******************************* */
// * 002 Readonly and Optional Interface Properties
/****************************** */
// interface Person {
//   readonly id: number;
//   first: string;
//   last: string;
//   nickname?: string;
// }

// const thomas: Person = {
//   id: 222,
//   first: "Thomas",
//   last: "Hardy",
// };

// thomas.first = "Thomas2";
// thomas.id = 2233; This has error because we can only set readonly property when defining the object

/******************************* */
// * 001 Introducing Interfaces
/****************************** */
interface IranianPerson {
  nationaCode: number;
  name: string;
  lastName: string;
  // sayHi: () => string;
  sayHi(): string; // The same thing as above
}

const ali: IranianPerson = {
  nationaCode: 2,
  name: "Ali",
  lastName: "Moradi",
  sayHi: () => {
    return "Hello";
  },
};

/******************************* */
// * 004 Interface Method Parameters
/****************************** */
interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Nike Shoes",
  price: 200,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    return newPrice;
  },
};

console.log(shoes.applyDiscount(0.4));

/******************************* */
// * 006 Reopening Interfaces
/****************************** */
interface Dog {
  name: string;
  age: number;
}

// this is not overwriting the above dog interface it is extending it and it is something unique for interfaces
interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Dog Elton",
  age: 2,
  breed: "test",
  bark() {
    return "hoo";
  },
};

/******************************* */
// * 007 Extending Interfaces
/****************************** */
//  Here the service dog automatically inherits name,age,breed and bark method
//  We can extend from multiples interfaces
interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb sniffer" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "Lab",
  job: "drug sniffer",
  bark() {
    return "boooo";
  },
};

/**************************************** */
// * 008 Interface Multiple Inheritance
/**************************************** */

interface Person {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Person, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: "Pierre",
  id: 23323,
  email: "piereed@g.com",
  level: "Senior",
  languages: ["Python", "JS"],
};

/**************************************** */
// * 009 Interfaces Vs. Type Aliases
/**************************************** */

type Color = "red" | "blue";

//  we cannot useinterfaces to define literals like this
// interface Car = 'ferrai' | 'Lambo';

type Chicken = {
  breed: string;
};

//  we cannot reopen it
// type Chicken = {
//   numEggs: number;
// };
