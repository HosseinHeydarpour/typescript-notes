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
