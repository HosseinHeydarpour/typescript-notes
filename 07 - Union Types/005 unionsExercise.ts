// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean

let highScore: number | boolean;
highScore = true;
highScore = 2;

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
let stuff2: number[] | string[];
stuff2 = [1, 2, 3];
stuff2 = ["a", "b", "v"];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";
// skillLevel = "Hello";
const skillLevel: SkillLevel = "Beginner";

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

let student1: SkiSchoolStudent = {
  name: "Al",
  age: 12,
  sport: "ski",
  level: "Beginner",
};

console.log(student1);

// **********************************************
// ******************* PART 5 *******************
// **********************************************
// Define a type to represent an RGB color
// r should be a number
// g should be a number
// b should be a number

type RGB = {
  r: number;
  g: number;
  b: number;
};

// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number

type HSL = {
  h: string;
  s: number;
  l: number;
};
// Create an array called colors that can hold a mixture of RGB and HSL color types
let colors: (RGB | HSL)[];
colors = [
  { h: "1", s: 2, l: 2 },
  { r: 1, g: 2, b: 2 },
];

// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
const greet = function (name: string | string[]): void {
  if (typeof name === "string") {
    console.log(`Hello, ${name}`);
  } else {
    name.forEach((name) => console.log(`Hello, ${name}`));
  }
};
