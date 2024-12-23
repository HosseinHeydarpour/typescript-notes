interface Chicked {
  breed: string;
  eggsPerWeek: number;
  name: string;
  age: number;
}

const norma: Chicked = {
  breed: "Silkieee",
  eggsPerWeek: 2,
  name: "Norma",
  age: 2,
};

const juniper: Chicked = {
  breed: "Silkie",
  eggsPerWeek: 5,
  name: "Juniper",
  age: 1,
};

// if we set strict to false this wont give us any error but if we set it to true this will have an error
// function doThing(thing) {
//   console.log(thing);
// }

// This will have error if we set strictNullCheck to true and does not have error if we set it to false
let users: string[] | null = ["addd", "sds"];
users = null;
// users = undefined;
