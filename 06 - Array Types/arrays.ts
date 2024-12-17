// const activeUsers: [] = []; // this is type empty array
const activeUsers: string[] = ["Hossein"]; // type + []
activeUsers.push("Steve");

const ageList: number[] = [1, 2, 3];
ageList[0] = 99;
// ageList[0] = "ankcs";

// **************************
// * 002 More Array Syntax
// **************************
const bools: Array<boolean> = [];
const bool2: boolean[] = [];

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({
  x: 23,
  y: 8,
});
coords.push({
  x: 25,
  y: 6,
});

