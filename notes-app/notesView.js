const NotesModel = require("./notesModel");

class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container');
    this.addButtonEl = document.querySelector('#add-note-button');
    this.resetButtonEl = document.querySelector('#reset-notes-button');

    this.addButtonEl.addEventListener('click', () => {
      const note = document.querySelector('#note-input');
      this.client.createNote((note.value), () => {
        this.displayError();
      });

      this.addNote(note.value);

      note.value = '';
    });

    this.resetButtonEl.addEventListener('click', () => {
      this.client.resetNotes(() => {
        this.displayError();
      });
      this.resetOldNotes();
    });
  }

  addNote = (note) => {
    this.model.addNotes(note);
    this.displayNotes();
  }

  resetOldNotes = () => {
    const oldNotes  = document.querySelectorAll('div.note');
    oldNotes.forEach(note => note.remove());
  }

  displayNotes = () => {
    this.resetOldNotes();
    const allNotes = this.model.getNotes();

    allNotes.forEach(note => {
      this.client.convertEmojis(note, (convertedNote) => {
        const newDiv = document.createElement('div');
        newDiv.textContent = convertedNote;
        newDiv.className = 'note'
        this.mainContainerEl.append(newDiv);
      });
      })
  }

  displayNotesFromApi = () => {
    this.client.loadNotes((notes ) => {
      this.model.setNotes(notes);
      this.displayNotes();
    }, () => {
      this.displayError();
    });
  }

  displayError = () => {
    const errorMessage =  document.createElement('p');
    errorMessage.textContent = 'Oops, something went wrong!';
    errorMessage.className = 'error';
    this.mainContainerEl.append(errorMessage);
  }
}

module.exports = NotesView;