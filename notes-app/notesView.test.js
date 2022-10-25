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
    const view = new NotesView(model);

    const inputEl = document.querySelector('#note-input');
    inputEl.value = 'Test 1';

    const buttonEl = document.querySelector('#add-note-button');
    buttonEl.click();

    expect(document.querySelectorAll('div.note').length).toBe(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toBe('Test 1');
  });
});