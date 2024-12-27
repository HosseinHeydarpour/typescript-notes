"use strict";

class Player {
  static description = "Player In Our Game";

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

  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be positive!");
    }
    this.#score = newScore;
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

  static randomPlayer() {
    return new Player("Andy", "Samberg");
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }
}

const player1 = new Player("Blue", "steele");

class AdminPlayer extends Player {
  isAdmin = true;

  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
}

// const admin = new AdminPlayer("Hossien", "Hey");
const admin = new AdminPlayer("admin", "mcAdmin", ["Delete", "Restore World"]);
admin.taunt();
