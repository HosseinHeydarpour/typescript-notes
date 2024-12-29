"use strict";
// function doThing(thing: number | string): number | string {
//   return thing;
// }
// const numbers: string[] = [];
// This is a factory for arrays
const numbers = [];
const colors = [];
const inputEl = document.querySelector("#username");
console.dir(inputEl);
inputEl.value = "Hossein";
const btn = document.querySelector(".btn");
console.dir(btn);
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
// function identity<Type>(item: Type): Type {
//   return item;
// }
// identity<string>
identity(7);
identity({ name: "blue", breed: "Shaneel" });
