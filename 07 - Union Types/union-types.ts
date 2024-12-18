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
