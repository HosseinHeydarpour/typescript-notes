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

// ******************************
// * 005 Introducing Enums
// ******************************
// UP;
// DOWN;
// LEFT;
// RIGHT;

// const PENDING = 0;
// const SHIPPED = 1;
// const DELIVERED = 2;

// if (status === DELIVERED) {
//   console.log("e");

// } else

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED = 23,
  RETURNED,
}

const status2 = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(status2);

// ******************************
// * 006 A Bit More On Enums!
// ******************************

// if we just start with a number like below others will be 11,12,13,14
// enum OrderStatus2 {
//   PENDING = 10,
//   SHIPPED
//   DELIVERED
//   RETURNED
// }

enum OrderStatus2 {
  PENDING = 10,
  SHIPPED = 32,
  DELIVERED = 324,
  RETURNED = 23,
}

enum ArrorKeys {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  error = 22,
}

// if(move === ArrorKeys.LEFT)
enum OrderStatus {
  PENDING,
  SHIPPED,
  DEVLIVERED,
  RETURNED,
}

// better way for enum in order to not to clutter the JS code
const enum OerderStatusAlternative {
  PENDING,
  SHIPPED,
  DEVLIVERED,
  RETURNED,
}

const order = {
  orderNumber: 20000,
  status: OrderStatus.PENDING,
  status2: OerderStatusAlternative.DEVLIVERED,
};
