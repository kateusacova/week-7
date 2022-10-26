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
        'Content-Type': 'application/json'
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

  convertEmojis = (note, callback) => {
    fetch('https://makers-emojify.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text: note})
    })
    .then((response) => response.json())
    .then((convertedEmojis) => {
      callback(convertedEmojis.emojified_text)
    })
  }

  resetNotes = (displayError) => {
    fetch('http://localhost:3000/notes',  {
    method: 'DELETE'
    })
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      displayError(error);
    })
  }

}

module.exports = NotesClient;
