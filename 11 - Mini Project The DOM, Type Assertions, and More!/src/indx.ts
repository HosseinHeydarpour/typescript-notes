const btn = document.getElementById("btn")!; // This is risky
const input: HTMLInputElement = document.getElementById("todoinput")!;

btn?.addEventListener("click", (e) => {
  input.value;
});

// btn?.addEventListener("click", (e) => {
//   alert("Clicked");
// });
// btn.addEventListener("click", (e) => {
//   alert("Clicked");
// });

// const mystery: unknown = "Hello World";

// const numChars = mystery.length; // This will have error as it its unknown type
// const numChars = (mystery as string).length; //
