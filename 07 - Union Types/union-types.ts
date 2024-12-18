// ******************************
// * 001 Introducing Union Types
// ******************************
// let age: number | string | boolean = 12; // This is a little bit crazy
let age: number | string = 12; // This is a little bit crazy
age = 23;
age = "24";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

//  Both are valid

let coordinates: Point | Loc = {
  x: 1,
  y: 34,
};

coordinates = {
  lat: 312.222,
  long: 2341.22,
};

// ***********************************
// * 002 Type Narrowing w Union Types
// ***********************************
function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}
printAge(23);
printAge("73");

function calculateTax(price: number | string, tax: number): number {
  // price.replace("$", ""); This has error too
  // return price * tax; this has error
  // the solution is type narrowing
  if (typeof price === "string") {
    price = price.replace("$", "");
    return parseFloat(price) * tax;
  }
  return price * tax;
}
