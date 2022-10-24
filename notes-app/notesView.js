const NotesModel = require("./notesModel");

class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container')
  }

  displayNotes = () => {
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