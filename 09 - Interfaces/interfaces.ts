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

/******************************* */
// * 001 Introducing Interfaces
/****************************** */
interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
}

const thomas: Person = {
  id: 222,
  first: "Thomas",
  last: "Hardy",
};

thomas.first = "Thomas2";
// thomas.id = 2233; This has error because we can only set readonly property when defining the object
