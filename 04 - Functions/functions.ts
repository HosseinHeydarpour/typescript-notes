function square(num: number) {
  // num.toUpperCase(); has error
  // num(); has error
  return num * num;
}

square(3);
// square('asfas'); has error
// square(true); has error

function greet(person: string) {
  // person * person Not allowed
  return console.log(`Hi ${person}`);
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};

doSomething("Abba", 23, true);
// doSomething("Abba", 23, 23232); This has error
// doSomething("Abba", 23); 1 parameter is missing

greet("John");
// greet(2);
// greet(true);
