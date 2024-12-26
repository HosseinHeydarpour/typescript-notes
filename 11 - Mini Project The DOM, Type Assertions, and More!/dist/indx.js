"use strict";
const btn = document.getElementById("btn"); // This is risky
// const input = document.getElementById("todoinput")! as HTMLInputElement;
const input = document.getElementById("todoinput");
const form = document.querySelector("form"); // here because we are selecting HTLM elemnt type from ts know the type
const list = document.querySelector("ul");
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
const todos = readTodos();
todos.forEach(createTodo);
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
};
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = todo.completed;
    checkBox.addEventListener("change", () => {
        todo.completed = checkBox.checked;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(checkBox);
    list?.append(newLI);
}
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
