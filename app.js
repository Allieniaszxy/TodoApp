btn1.addEventListener("click", () => {
  let input = document.getElementById("text");
  let task = document.getElementById("tasklist");

  let newInput = document.createElement("li");
  newInput.innerHTML = input.value;
  tasklist.appendChild(li);
});
