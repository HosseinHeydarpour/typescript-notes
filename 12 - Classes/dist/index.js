"use strict";

class Player {
  score = 0;
  numLives = 10;

  constructor(first, last) {
    this.first = first;
    this.last = last;
    // this.score = 0; old way
    // this.numLives = 10; old way
  }

  taunt() {
    console.log("BOOYA");
  }

  loseLife() {
    this.numLives -= 1;
  }
}

const player1 = new Player("Blue", "steele");
// player1.taunt();
// console.log(player1.last);
// console.log(player1);

console.log(player1.numLives);
player1.loseLife();
console.log(player1.numLives);

// const player2 = new Player("Red", "steele");
// player2.taunt();
// console.log(player2.first);
