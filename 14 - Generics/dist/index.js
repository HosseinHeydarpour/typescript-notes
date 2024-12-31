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
// function merge(obj1, obj2) {
//   return {
//     ...obj1,
//     ...obj2,
//   };
// }
function merge(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
console.log(merge({ name: "colt" }, { pets: ["blue", "elton"] }));
const comboObject = merge({ name: "colt" }, { pets: ["blue", "elton"] });
// console.log(merge({ name: "hossein" }, 9)); this will have error now
console.log(merge({ name: "hossein" }, { num: 9 }));
// function printDoubleLength<T extends Lengthy>(thing: T): number {
//   return thing.length * 2;
// }
// This works too!
function printDoubleLength(thing) {
    return thing.length * 2;
}
printDoubleLength("ascdac"); // This wont have error because it has a length
// printDoubleLength(234);
function makeEmptyList() {
    return [];
}
const strings = makeEmptyList();
strings.push("Hello");
const strings2 = makeEmptyList(); // This will return an unknown array without specifing
const bools = makeEmptyList();
// class VideoPlaylist {
//   public videos: Video[] = [];
// }
// class SongPlaylist {
//   public songs: Song[] = [];
// }
// Instead we create a generic playlist
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
// songs.add()
const videos = new Playlist();
// videos.add()
