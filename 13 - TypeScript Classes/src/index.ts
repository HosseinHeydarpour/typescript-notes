class Player {
  first: string;
  last: string;
  // score: number;
  score = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
    // this.score = 0;
  }
}

const elton = new Player("Elton", "Steele");
elton.score = 2;
// elton.score = 'asca'; // This will have error
