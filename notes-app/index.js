const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

console.log('The notes app is running');

const model = new NotesModel;

model.addNotes('This is an example note');
model.addNotes('Test note');

const view = new NotesView(model);

view.displayNotes();
