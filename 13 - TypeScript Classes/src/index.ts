class Player {
  public readonly first: string;
  public readonly last: string;
  // #score: number; This is real JS
  private score = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
    // this.score = 0;
    this.secretMethod();
  }

  private secretMethod() {
    console.log("SECRETTTT!");
  }
}

const elton = new Player("Elton", "Steele");
// elton.score = 2; // This will have error because it is private
// elton.secretMethod(); // Thiis will have error in TS bacuase it is private
