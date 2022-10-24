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
    expect(document.querySelectorAll('div.note').length).toBe(2);
  });
});