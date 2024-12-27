"use strict";
class Player {
    constructor(first, last) {
        // score: number;
        this.score = 0;
        this.first = first;
        this.last = last;
        // this.score = 0;
    }
}
const elton = new Player("Elton", "Steele");
elton.score = 2;
// elton.first = 'cvndskv';
// elton.score = 'asca'; // This will have error
// elton.first = "eltion"; // This will have error because  its i readnly
