'use babel';

export default class XenesisAtomView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('tool-panel', 'xenesis-atom');
    this.element.tabIndex = -1;

    // Create message element
    //const message = document.createElement('div');
    //message.textContent = `state: ${serializedState}`;
    //message.classList.add('message');
    //this.element.appendChild(message);

    const path = document.createElement('atom-text-editor');
    path.setAttribute('mini', null);
    path.classList.add('editor', 'mini');

    this.element.appendChild(path);

    this.visible = false;
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  getTitle() {
    return 'Xenesis';
  }

  getURI() {
    return 'atom://xenesis-atom';
  }

  getAllowedLocations() {
    return ['right'];
  }

  getPrefferedLocation() {
    return 'right';
  }

  isVisible() {
    return this.visible;
  }

  toggle() {
    this.visible = !this.visible;
    if(this.visible) {
      this.element.style.display = null;
    } else {
      this.element.style.display = 'none';
    }
    return atom.workspace.toggle(this);
  }
}
