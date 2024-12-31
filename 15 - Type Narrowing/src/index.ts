function tripe(value: number | string): number | string {
  if (typeof value === "string") return value.repeat(3);
  return value * 3;
}

const el = document.getElementById("#idk");

if (el) {
  // Here type script knows for sure that the type is HTMLElement and it is not null
  // el.
} else {
  // Here type script knows for sure that the type is null
  // el
}

const printLetters = (word: string | null) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    // Here the type is string or null because typescript cannot tell for sure it is null or string because '' is still a string but it is falsy
    word;
    console.log("YOU DID NOT PASS IN A WORD");
  }
};

function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    // Both x and y going to be string because the only situation where x and why can be strictly equal is where both are string
    x;
    y;
    x.toLocaleUpperCase();
  }
}

someDemo(3, "3");
