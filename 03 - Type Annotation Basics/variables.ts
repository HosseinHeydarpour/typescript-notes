let movieTitle: string = "Game of thrones";
movieTitle = "House";
// movieTitle = 9; Has error
// movieTitle.upper(); Has eeror it is not available
movieTitle.toUpperCase();

let numcatLives: number = 9;
numcatLives += 1;
// numcatLives = "Zero";

let gameOver: boolean = false;
gameOver = true;
// gameOver = "False";

// Type inference

let tvShow = "Lorem"; // Type script inders this as string
tvShow = "Lorem Ipsum";
// tvShow = false;  // This has error

let isFunny = false;
isFunny = true;
// isFunny = 'vdsv';  // This has error
