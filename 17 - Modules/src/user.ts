//  Both of these below are true and ok the second one is for when you want to import a type and a non type exported thing
import type { Person } from "./types.js";
// import  { type Person, {not a type exported thing} } from "./types.js";

export default class User implements Person {
  constructor(public username: string, public email: string) {}

  logOut() {
    console.log(`${this.username} logged out!`);
  }
}

// This is a named export
export function userHelper() {
  console.log("User Helper");
}
