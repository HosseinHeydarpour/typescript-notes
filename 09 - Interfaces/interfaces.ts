/******************************* */
// * 001 Introducing Interfaces
/****************************** */
type Point = {
  x: number;
  y: number;
};

const pt: Point = {
  x: 1,
  y: 2,
};

interface Point2 {
  x: number;
  y: number;
}

const p2t: Point2 = {
  x: 23,
  y: 34,
};
