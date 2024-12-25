"use strict";
const btn = document.getElementById("btn"); // This is risky
// const input = document.getElementById("todoinput")! as HTMLInputElement;
const input = document.getElementById("todoinput");
const form = document.querySelector("form"); // here because we are selecting HTLM elemnt type from ts know the type
const list = document.querySelector("ul");
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = input.value;
    const newLI = document.createElement("li");
    newLI.append(newTodo);
    list?.append(newLI);
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    newLI.append(checkBox);
    input.value = "";
};
form.addEventListener("submit", handleSubmit);
// btn.addEventListener("click", (e) => {
//   alert(input.value);
//   input.value = "";
// });
// btn?.addEventListener("click", (e) => {
//   alert("Clicked");
// });
// btn.addEventListener("click", (e) => {
//   alert("Clicked");
// });
// const mystery: unknown = "Hello World";
// const numChars = mystery.length; // This will have error as it its unknown type
// const numChars = (mystery as string).length; //
