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

greet("John");
// greet(2);
// greet(true);
