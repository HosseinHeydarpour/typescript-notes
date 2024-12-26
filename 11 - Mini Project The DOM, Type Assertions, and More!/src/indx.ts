const btn = document.getElementById("btn")!; // This is risky
// const input = document.getElementById("todoinput")! as HTMLInputElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;

const form = document.querySelector("form")!; // here because we are selecting HTLM elemnt type from ts know the type

const list = document.querySelector("ul") as HTMLUListElement;

interface Todo {
  text: string;
  completed: boolean;
}

const todos: Todo[] = [];

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };

  todos.push(newTodo);
  createTodo(newTodo);

  input.value = "";
};

function createTodo(todo: Todo) {
  const newTodoText = todo.text;
  const newLI = document.createElement("li");
  newLI.append(newTodoText);
  list?.append(newLI);
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  newLI.append(checkBox);
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
