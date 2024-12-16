const dog = {
  name: "barfi",
  breed: "Sheperd",
  age: 0.5,
};

function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Hossein", last: "Heydarpour" });

// ******************************
// * 002 More Object Types
// ******************************

// let coordinate: { x: number; y: number } = { x: 22, y: 2 };

// function randomCoordinate(): { x: number; y: number } {
//   return {
//     x: Math.random(),
//     y: Math.random(),
//   };
// }

// ******************************
// * 003 Excess Properties
// ******************************

// Has error because age is not available in function def
// printName({ first: "Mick", last: "Jagger", age: 234 });

// This does not have any error unlike the line above
// so if you pass the extra stuff with object literal there will be error
const mick = { first: "Mick", last: "Jagger", age: 234, isAlive: true };
printName(mick);

// ******************************
// * 005 Creating Type Aliases
// ******************************

type Point = {
  x: number;
  y: number;
};

let coordinate: Point = { x: 22, y: 2 };

// function randomCoordinate(): { x: number; y: number } {
//   return {
//     x: Math.random(),
//     y: Math.random(),
//   };
// }
function randomCoordinate(): Point {
  return {
    x: Math.random(),
    y: Math.random(),
  };
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

// This is not very popular
type myNum = number;
let age: myNum = 1234;