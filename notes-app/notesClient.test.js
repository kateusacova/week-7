const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableMocks();

describe('Client class', () => {

  beforeEach(() => {
    fetch.resetMocks();
  });

  it('calls fetch and loads data', (done) => {
    const client = new NotesClient;
    fetch.mockResponseOnce(JSON.stringify({
      name: "Some value",
      id: 123
    }));

    client.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.name).toBe('Some value');
      expect(returnedDataFromApi.id).toBe(123);

      done();
    });
  });

  // it('calls fetch to post data', (done) => {
  //   const client = new NotesClient;

  //   const note = 'Test note';

  //   fetch.mockResponseOnce(JSON.stringify({
  //     content: note
  //   }));

  //   client.createNote(note, (returnedDataFromApi) => {
  //     expect(returnedDataFromApi.content).toBe('Test note');

  //     done();
  //   });
  // });
});