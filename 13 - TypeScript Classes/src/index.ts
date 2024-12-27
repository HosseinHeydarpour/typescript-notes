class Player {
  public readonly first: string;
  public readonly last: string;
  // score: number;
  public score = 0;

  constructor(first: string, last: string) {
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
