//  Using allias for an exported thing
import { add, sample as sampleFunc } from "./utils.js";
import { PI } from "./utils.js";
const sample = 123;
console.log("Hello World");
console.log(PI);
console.log(sampleFunc([1, 2, 3]));
console.log(add(3, 2));
