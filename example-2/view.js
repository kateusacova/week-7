class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph = () => {
    let p = document.createElement('p');
    p.textContent = 'This paragraph has been dynamically added by JavaScript!'
    this.mainContainerEl.append(p);
  }

  clearParagraphs = () => {
    const allParags = document.querySelectorAll('p');
    allParags.forEach(p => p.remove());
  }
}

module.exports = View;