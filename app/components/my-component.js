import Component from '@ember/component';

export default Component.extend({

  onValueChanged: null,

  actions: {
    changeInput() {
      this.onValueChanged();
    }
  }
});
