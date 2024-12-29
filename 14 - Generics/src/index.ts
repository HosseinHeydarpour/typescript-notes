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
