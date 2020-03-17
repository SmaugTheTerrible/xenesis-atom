'use babel';

import XenesisAtomView from './xenesis-atom-view';
import { CompositeDisposable } from 'atom';

export default {

  xenesisAtomView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.xenesisAtomView = new XenesisAtomView(state.xenesisAtomViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.xenesisAtomView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'xenesis-atom:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.xenesisAtomView.destroy();
  },

  serialize() {
    return {
      xenesisAtomViewState: this.xenesisAtomView.serialize()
    };
  },

  toggle() {
    console.log('XenesisAtom was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
