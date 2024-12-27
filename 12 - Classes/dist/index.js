"use strict";

class Player {
  // _score = 0; // old convention
  #score = 0; // old convention
  numLives = 10;

  constructor(first, last) {
    this.first = first;
    this.last = last;
    // this.score = 0; old way
    // this.numLives = 10; old way
    this.#secret();
  }

  get score() {
    return this.#score;
  }

  // getScore() {
  //   return this.#score;
  // }

  updateScore(newScore) {
    this.#score = newScore;
  }

  taunt() {
    console.log("BOOYA");
  }

  loseLife() {
    this.numLives -= 1;
  }

  // Private method
  #secret() {
    console.log("Secret");
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }
}

const player1 = new Player("Blue", "steele");
// player1.taunt();
// console.log(player1.last);
// console.log(player1);

console.log(player1.numLives);
player1.loseLife();
console.log(player1.numLives);
// player1._score = -1000;
// player1.#score = -1000; This will not be accessible outside player class
console.log(player1);
// console.log(player1.getScore());
player1.updateScore(222);
// console.log(player1.getScore());

// We do not call the getter like a method with () we treat it like a property
console.log(player1.fullName);
console.log(player1.score);
// player1.score = 2233; // this wont change anything and returns an error
console.log(player1.score);

// const player2 = new Player("Red", "steele");
// player2.taunt();
// console.log(player2.first);
