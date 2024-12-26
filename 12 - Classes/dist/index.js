"use strict";

class Player {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  taunt() {
    console.log("BOOYA");
  }
}

const player1 = new Player("Blue", "steele");
player1.taunt();
console.log(player1.last);

const player2 = new Player("Red", "steele");
player2.taunt();
console.log(player2.first);
