// **********************
// * 001 Introducing Tuples
// **********************
const stuff4: (number | string)[] = ["as", 12, 3];

let color: [number, number, number];
color = [1, 2, 3];

// ******************************
// * 002 A Bit More On Tuples
// ******************************

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];
// const goodRes: HTTPResponse = ["OK", 200]; // This has error we have to repeat the order
// goodRes[0] = "12"; This has error too because the order is not right
goodRes.push("hello"); // this is a bad thing that we can push after creating the tuple and it is a limitition of the tuple
goodRes.pop(); // this is a bad thing that we can push after creating the tuple and it is a limitition of the tuple
goodRes.pop(); // this is a bad thing that we can push after creating the tuple and it is a limitition of the tuple
goodRes.pop(); // this is a bad thing that we can push after creating the tuple and it is a limitition of the tuple

const responses: HTTPResponse[] = [
  [400, "hELLO"],
  [404, "HIT THE ROAD"],
];
