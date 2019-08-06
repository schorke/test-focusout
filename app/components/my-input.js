import Component from '@ember/component';

export default Component.extend({

  attributeBindings: [ 'inputValue:value' ],

  classNames: [ 'my-input' ],

  tagName: 'input',

  onFocusOut: null,

  focusOut() {
    this.onFocusOut();
  }
});
