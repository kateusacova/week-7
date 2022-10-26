class NotesClient {

  loadNotes = (displayResult, displayError) => {
    fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then((data) => {
      displayResult(data);
    })
    .catch((error) => {
      displayError(error);
    })
  }

  createNote = (note, displayError) => {
    fetch('http://localhost:3000/notes',  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({content: note})
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      displayError(error);
    })
  }
}

module.exports = NotesClient;
