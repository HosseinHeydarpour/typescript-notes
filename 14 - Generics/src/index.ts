// function doThing(thing: number | string): number | string {
//   return thing;
// }

// const numbers: string[] = [];
// This is a factory for arrays
const numbers: Array<number> = [];
const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;

console.dir(inputEl);
inputEl.value = "Hossein";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;
console.dir(btn);

function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

// This is not a good solution because this gets anything and returns anything
// function identity(item: any): any {
//   return item;
// }

// this is a generic function

interface Cat {
  name: string;
  breed: string;
}

function identity<T>(item: T): T {
  return item;
}
// function identity<Type>(item: Type): Type {
//   return item;
// }

// identity<string>
identity<number>(7);

identity<Cat>({ name: "blue", breed: "Shaneel" });

function getRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

console.log(getRandomElement<number>([4, 5, 6, 7]));
console.log(getRandomElement<string>(["a", "b", "c"]));

// getRandomElement<string>(["a", "c", "as"]);
getRandomElement(["a", "c", "as"]);
getRandomElement([1, 2, 3, 4]);

// [4,5,6,7]
// [true,false,true]
// [{},{},{}]

let x = 23;

// function merge(obj1, obj2) {
//   return {
//     ...obj1,
//     ...obj2,
//   };
// }

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}

console.log(merge({ name: "colt" }, { pets: ["blue", "elton"] }));
const comboObject = merge({ name: "colt" }, { pets: ["blue", "elton"] });
// console.log(merge({ name: "hossein" }, 9)); this will have error now
console.log(merge({ name: "hossein" }, { num: 9 }));

interface Lengthy {
  length: number;
}

// function printDoubleLength<T extends Lengthy>(thing: T): number {
//   return thing.length * 2;
// }

// This works too!
function printDoubleLength(thing: Lengthy): number {
  return thing.length * 2;
}

printDoubleLength("ascdac"); // This wont have error because it has a length
// printDoubleLength(234);

function makeEmptyList<T = number>(): T[] {
  return [];
}

const strings = makeEmptyList<string>();
strings.push("Hello");

const strings2 = makeEmptyList(); // This will return an unknown array without specifing

const bools = makeEmptyList<boolean>();
