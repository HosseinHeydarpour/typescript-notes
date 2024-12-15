const dog = {
  name: "barfi",
  breed: "Sheperd",
  age: 0.5,
};

function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Hossein", last: "Heydarpour" });
