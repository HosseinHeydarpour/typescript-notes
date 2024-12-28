"use strict";
// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   // #score: number; This is real JS
//   private score = 0;
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//     // this.score = 0;
//     this.secretMethod();
//   }
//   private secretMethod() {
//     console.log("SECRETTTT!");
//   }
// }
class Player {
    // private score = 0;
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("SECRETTTT!");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("score is negative");
        }
        this._score = newScore;
    }
}
const elton = new Player("Elton", "Steele", 100);
console.log(elton);
console.log(elton.fullName);
// elton.score = 2; // This will have error because it is private
// elton.secretMethod(); // Thiis will have error in TS bacuase it is private
// elton.fullName '0ada'; this will have error
console.log(elton.score);
elton.score = 99;
// elton.score = -99; this will throw an error but Type script wont intercept this error
// elton.score = 'cm'; This will have error too but typescript can intercept this
