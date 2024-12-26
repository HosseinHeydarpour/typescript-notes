const btn = document.getElementById("btn")!; // This is risky
// const input = document.getElementById("todoinput")! as HTMLInputElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;

const form = document.querySelector("form")!; // here because we are selecting HTLM elemnt type from ts know the type

const list = document.querySelector("ul") as HTMLUListElement;

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];

  return JSON.parse(todosJSON);
}

interface Todo {
  text: string;
  completed: boolean;
}

const todos: Todo[] = readTodos();

todos.forEach(createTodo);

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };

  createTodo(newTodo);
  todos.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todos));

  input.value = "";
};

function createTodo(todo: Todo) {
  const newLI = document.createElement("li");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";

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
