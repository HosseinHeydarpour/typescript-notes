var dog = {
    name: "barfi",
    breed: "Sheperd",
    age: 0.5,
};
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Hossein", last: "Heydarpour" });
// ******************************
// * 002 More Object Types
// ******************************
// let coordinate: { x: number; y: number } = { x: 22, y: 2 };
// function randomCoordinate(): { x: number; y: number } {
//   return {
//     x: Math.random(),
//     y: Math.random(),
//   };
// }
// ******************************
// * 003 Excess Properties
// ******************************
// Has error because age is not available in function def
// printName({ first: "Mick", last: "Jagger", age: 234 });
// This does not have any error unlike the line above
// so if you pass the extra stuff with object literal there will be error
var mick = { first: "Mick", last: "Jagger", age: 234, isAlive: true };
printName(mick);
var coordinate = { x: 22, y: 2 };
// function randomCoordinate(): { x: number; y: number } {
//   return {
//     x: Math.random(),
//     y: Math.random(),
//   };
// }
function randomCoordinate() {
    return {
        x: Math.random(),
        y: Math.random(),
    };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var age = 1234;
function calcPayout(song) {
    return 0.0033 * song.numStreams;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Thimking out",
    artist: "Ed sheeran",
    numStreams: 1231321651,
    credits: {
        producer: "Ed sheeran",
        writer: "Ed sheeran",
    },
};
var eranings = calcPayout(mySong);
console.log(eranings);
printSong(mySong);
