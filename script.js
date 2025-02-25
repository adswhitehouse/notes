// Variables
let createNotesButton = document.querySelector(".jsCreateNotesButton");
let notesContainer = document.querySelector(".jsNotesContainer");

function createNote() {
  // Create note elements
  let textareaContainer = document.createElement("div");
  let textarea = document.createElement("textarea");
  let deleteNoteBtn = document.createElement("button");
  let deleteNoteImg = document.createElement("img");

  // Style elements
  textareaContainer.classList.add("textarea-container");
  textarea.classList.add("note-text");
  deleteNoteBtn.classList.add("delete-note", "jsDeleteNote");

  // Add img element src
  deleteNoteImg.setAttribute("src", "./images/delete.png");

  // Append elements
  deleteNoteBtn.appendChild(deleteNoteImg);
  textareaContainer.append(textarea, deleteNoteBtn);
  notesContainer.appendChild(textareaContainer);

  deleteNote();
}

// Create note on create notes button click
createNotesButton.addEventListener("click", () => {
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
