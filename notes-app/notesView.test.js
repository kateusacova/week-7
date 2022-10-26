/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe('NotesView', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('Returns each note as a div', () => {
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNotes('Test 1');
    model.addNotes('Test 2');
    view.displayNotes();
    view.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(2);
  });

  it('User inputted text is displayed as a note after the button clicked', () => {
    const model = new NotesModel();
    const fakeClient = {
      createNote: (note) => 'Success: Test 1'
    }
    const view = new NotesView(model, fakeClient);

    const inputEl = document.querySelector('#note-input');
    inputEl.value = 'Test 1';

    const buttonEl = document.querySelector('#add-note-button');
    buttonEl.click();

    expect(document.querySelectorAll('div.note').length).toBe(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toBe('Test 1');
  });

  it('displays notes from the API', () => {
    const model = new NotesModel();
    const fakeClient = {
      loadNotes: (callback) => {
        callback(['This note is coming from the server']);
      }
    }
    const view = new NotesView(model, fakeClient);

    view.displayNotesFromApi();
    expect(document.querySelectorAll('div.note').length).toBe(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toBe('This note is coming from the server');
  });

  it('displays error message', () =>  {
    const model = new NotesModel();
    const view = new NotesView(model);
    view.displayError();
    expect(document.querySelector('p.error').textContent).toBe('Oops, something went wrong!');
  });
});