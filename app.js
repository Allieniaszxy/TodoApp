btn1.addEventListener("click", () => {
  let text = document.getElementById("text");
  let tasklist = document.getElementById("tasklist");

  let newInput = document.createElement("li");
  newInput.textContent = text.value;
  tasklist.appendChild(li);
});
