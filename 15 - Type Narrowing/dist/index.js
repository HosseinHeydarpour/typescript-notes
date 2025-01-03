"use strict";
function tripe(value) {
    if (typeof value === "string")
        return value.repeat(3);
    return value * 3;
}
const el = document.getElementById("#idk");
if (el) {
    // Here type script knows for sure that the type is HTMLElement and it is not null
    // el.
}
else {
    // Here type script knows for sure that the type is null
    // el
}
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        // Here the type is string or null because typescript cannot tell for sure it is null or string because '' is still a string but it is falsy
        word;
        console.log("YOU DID NOT PASS IN A WORD");
    }
};
function someDemo(x, y) {
    if (x === y) {
        // Both x and y going to be string because the only situation where x and why can be strictly equal is where both are string
        x;
        y;
        x.toLocaleUpperCase();
    }
}
someDemo(3, "3");
function getRunTime(media) {
    if ("numEPS" in media) {
        return media.numEPS * media.episodeDuration;
    }
    // Because we returned in the if here TS know for sure that media is a Movie
    return media.duration;
}
console.log(getRunTime({
    title: "Amadeus",
    duration: 160,
}));
console.log(getRunTime({
    title: "Sponge Bob",
    episodeDuration: 80,
    duration: 30,
}));
function printFullDate(date) {
    if (date instanceof Date) {
        // return date.toUTCString();
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
class User {
    constructor(name) {
        this.name = name;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        entity;
    }
    else {
        entity;
    }
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        return "meow";
    }
    animal;
    return "Woof";
}
function getFarmAnimalSound(animal) {
    switch (animal.KIND) {
        case "pig":
            return "Oink!";
        case "cow":
            return "Mooo!";
        case "rooster":
            return "Cockadooooodeldoo!";
        case "sheep":
            return "Baaa";
        default:
            // We should never make it here if we handlea all cases correctly
            // const shouldNeverGetHere: never = animal;
            // return shouldNeverGetHere;
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
const stevie = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    KIND: "rooster",
};
console.log(getFarmAnimalSound(stevie));
