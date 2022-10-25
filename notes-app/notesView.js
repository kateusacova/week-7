const NotesModel = require("./notesModel");

class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#add-note-button');

    this.buttonEl.addEventListener('click', () => {
      const note = document.querySelector('#note-input');
      this.addNote(note.value);
      
      note.value = '';
    });
  }

  addNote = (note) => {
    this.model.addNotes(note);
    this.displayNotes();
  }

  displayNotes = () => {
    const oldNotes  = document.querySelectorAll('div.note');
    oldNotes.forEach(note => note.remove());

    const allNotes = this.model.getNotes();

    allNotes.forEach(note => {
      const newDiv = document.createElement('div');
      newDiv.textContent = note;
      newDiv.className = 'note'
      this.mainContainerEl.append(newDiv);
    });
  }

}

module.exports = NotesView;