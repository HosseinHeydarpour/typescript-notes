const btn = document.getElementById("btn")!; // This is risky

// btn?.addEventListener("click", (e) => {
//   alert("Clicked");
// });
btn.addEventListener("click", (e) => {
  alert("Clicked");
});
