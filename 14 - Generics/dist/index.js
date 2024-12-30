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
function getRandomElement(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
console.log(getRandomElement([4, 5, 6, 7]));
console.log(getRandomElement(["a", "b", "c"]));
// getRandomElement<string>(["a", "c", "as"]);
getRandomElement(["a", "c", "as"]);
getRandomElement([1, 2, 3, 4]);
// [4,5,6,7]
// [true,false,true]
// [{},{},{}]
let x = 23;
