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
