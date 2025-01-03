export function add(x: number, y: number) {
  return x + y;
}

export function sample<T>(arr: T[]): T {
  const rndIndex = Math.floor(Math.random() * arr.length);
  return arr[rndIndex];
}

const x = 1;

export const PI = 3.14;
