function square(num: number) {
  // num.toUpperCase(); has error
  // num(); has error
  return num * num;
}

square(3);
// square('asfas'); has error
// square(true); has error

const doSomething = (person: string, age: number, isFunny: boolean) => {};

doSomething("Abba", 23, true);
// doSomething("Abba", 23, 23232); This has error
// doSomething("Abba", 23); 1 parameter is missing

// greet(2);
// greet(true);

// In the JS
function multiply(num = 2) {
  return num * 2;
}

function greet(person: string = "stranger") {
  // person * person Not allowed
  return console.log(`Hi ${person}`);
}

greet("John");
greet();
// greet(12312); has eeror it is either string or nothing

// *****************************
//  005 Return Type Annotations
// *****************************

function cube(num: number): number {
  return num * num * num;
}

square(4);

// Th ecase that the function can return multiple value types Union types
function random(num: number): number | string {
  if (Math.random() < 0.5) {
    return num.toString();
  } else {
    return num;
  }
}

const add = (x: number, y: number): number => {
  return x + y;
};

// ******************************************
// * 006 Anonymous Function Contextual Typing
// ******************************************
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
  return color.toUpperCase();
  // return color.toFixed(); This has error because TS know colo is string and to fixed will not work on it
});

// When you do not specify the type function expects any type
// function blah(color){

// }

// ******************************************
// * 007 The Void Type
// ******************************************

function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);

  // return ''; This will have error
}
