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
