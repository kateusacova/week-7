class MessageView {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');
    this.clickMeButtonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.clickMeButtonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
   });
  }

  displayMessage() {
    const message = document.createElement('div');
    message.id = 'message';
    message.textContent = 'Thanks for clicking me!';
    this.mainContainerEl.append(message);
  }

  hideMessage() {
    document.querySelector('#message').remove();
  }
}

module.exports = MessageView;