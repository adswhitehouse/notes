// Variables
let createNotesBtn = document.querySelector(".jsCreateNotesButton");
let notesContainer = document.querySelector(".jsNotesContainer");

function createNote() {
  // Create note elements
  let textContainer = document.createElement("div");
  let text = document.createElement("p");
  let deleteNoteBtn = document.createElement("button");
  let deleteNoteImg = document.createElement("img");

  // Style elements
  textContainer.classList.add("textarea-container");
  text.classList.add("note-text");
  deleteNoteBtn.classList.add("delete-note", "jsDeleteNote");

  // Add attributes
  deleteNoteImg.setAttribute("src", "./images/delete.png");
  text.setAttribute("contenteditable", "true");

  // Append elements
  deleteNoteBtn.appendChild(deleteNoteImg);
  textContainer.append(text, deleteNoteBtn);
  notesContainer.appendChild(textContainer);

  deleteNote();
}

// Create note on create notes button click
createNotesBtn.addEventListener("click", () => {
  createNote();
});

// Delete relative note on delete button click
function deleteNote() {
  let deleteNoteBtns = document.querySelectorAll(".jsDeleteNote");
  deleteNoteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.remove();
    });
  });
}

// function saveToLocalStorage() {
//   localStorage.setItem("notes", notesContainer.innerHTML)
// }
