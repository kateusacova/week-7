const NotesModel = require("./notesModel")

describe('NotesModel', () => {
  it('returns an empty list of notes', () => {
    const model = new NotesModel;
    expect(model.getNotes()).toEqual([]);
  });

  it('returns the list of added notes', () => {
    const model = new NotesModel;
    model.addNotes('Buy milk');
    model.addNotes('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });

  it('return an empty list after resetting it', () => {
    const model = new NotesModel;
    model.addNotes('Buy milk');
    model.addNotes('Go to the gym');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});