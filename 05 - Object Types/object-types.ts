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

// type Point = {
//   x: number;
//   y: number;
// };

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

// ******************************
// * 006 Nested Objects
// ******************************

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calcPayout(song: Song): number {
  return 0.0033 * song.numStreams;
}

function printSong(song: Song) {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Thimking out",
  artist: "Ed sheeran",
  numStreams: 1231321651,
  credits: {
    producer: "Ed sheeran",
    writer: "Ed sheeran",
  },
};

const eranings = calcPayout(mySong);
console.log(eranings);
printSong(mySong);

// ******************************
// * 007 Optional Properties
// ******************************
type Point = {
  x: number;
  y: number;
  z?: number; // Optional
  // z: number;
};

const myPoint: Point = { x: 1, y: 3, z: 9 };

// ******************************
// * 008 The readonly Modifier
// ******************************

// modifier
type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 234,
  username: "cat",
};

console.log(user.id);
// user.id = 232313; This has error because it is readonly
