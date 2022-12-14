/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {

  beforeEach(() =>  {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('clicks the button to display message', () => {
    const view = new MessageView();

    const inputfFormEl = document.querySelector('#message-input')
    inputfFormEl.value = 'Hello!'

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('#message').textContent).toEqual('Hello!');
  });
  
  it('clicks button to remove message', () => {
    const view = new MessageView();

    const clickMeButtonEl = document.querySelector('#show-message-button');
    const hideButtonEl = document.querySelector('#hide-message-button');
    
    clickMeButtonEl.click();
    hideButtonEl.click();

    expect(document.querySelector('#message')).toBeNull();
  });
});