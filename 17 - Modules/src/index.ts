//  Using allias for an exported thing
import { add, sample as sampleFunc } from "./utils.js";
import { PI } from "./utils.js";
// We can use whatever name we like instead of user
// which holds the defualt export from this file which is user class
import User, { userHelper } from "./user.js";

const sample = 123;

console.log("Hello World");
console.log(PI);
console.log(sampleFunc([1, 2, 3]));
console.log(add(3, 2));
