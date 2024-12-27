"use strict";
class Player {
    constructor(first, last) {
        // #score: number; This is real JS
        this.score = 0;
        this.first = first;
        this.last = last;
        // this.score = 0;
        this.secretMethod();
    }
    secretMethod() {
        console.log("SECRETTTT!");
    }
}
const elton = new Player("Elton", "Steele");
// elton.score = 2; // This will have error because it is private
// elton.secretMethod(); // Thiis will have error in TS bacuase it is private
