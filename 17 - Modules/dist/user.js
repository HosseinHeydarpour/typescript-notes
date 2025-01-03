// import  { type Person, {not a type exported thing} } from "./types.js";
export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logOut() {
        console.log(`${this.username} logged out!`);
    }
}
// This is a named export
export function userHelper() {
    console.log("User Helper");
}
