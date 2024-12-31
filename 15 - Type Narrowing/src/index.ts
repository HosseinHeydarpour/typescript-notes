function tripe(value: number | string): number | string {
  if (typeof value === "string") return value.repeat(3);
  return value * 3;
}
