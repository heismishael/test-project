const note = document.getElementById("sticky-note");
const colorPicker = document.getElementById("color-picker");

// Load saved content and styles
note.innerHTML = localStorage.getItem("noteContent") || "Write something...";
note.style.backgroundColor = localStorage.getItem("noteColor") || "#fffa87";
colorPicker.value = localStorage.getItem("noteColor") || "#fffa87";

note.addEventListener("input", () => {
  localStorage.setItem("noteContent", note.innerHTML);
});

colorPicker.addEventListener("input", (e) => {
  note.style.backgroundColor = e.target.value;
  localStorage.setItem("noteColor", e.target.value);
});

function clearNote() {
  note.innerHTML = "";
  localStorage.removeItem("noteContent");
}

// Drag functionality
let offsetX, offsetY, isDragging = false;

note.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - note.offsetLeft;
  offsetY = e.clientY - note.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    note.style.left = `${e.clientX - offsetX}px`;
    note.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
