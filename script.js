// HTML Variables
let createNotesBtn = document.querySelector(".jsCreateNotesButton");
let notesContainer = document.querySelector(".jsNotesContainer");

// Display localStorage in notes container upon load
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

// Saves notes container to local storage
function updateLocalStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// Create note on create notes button click
createNotesBtn.addEventListener("click", () => {
  // Create note elements
  let textContainer = document.createElement("div");
  let text = document.createElement("p");
  let deleteNoteImg = document.createElement("img");

  // Style elements
  textContainer.classList.add("textarea-container");
  text.classList.add("note-text", "jsNote");
  deleteNoteImg.classList.add("delete-note", "jsDeleteNote");

  // Add attributes
  deleteNoteImg.setAttribute("src", "./images/delete.png");
  text.setAttribute("contenteditable", "true");

  // Append elements
  notesContainer.appendChild(textContainer).append(text, deleteNoteImg);

  updateLocalStorage();
});

// Delete relative note on delete image click
notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateLocalStorage();
  } else if (e.target.tagName === "P") {
    let notes = document.querySelectorAll(".jsNote");
    notes.forEach((note) => {
      note.addEventListener("keyup", updateLocalStorage);
    });
  }
});

// Inserts line break and allows local storage to display content correctly
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
});
