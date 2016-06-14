


import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },
    update(answer) {
      var params = {
        author: this.get('author'),
        input: this.get('input')
      };
      this.set('updateAnswerForm', false);
      this.sendAction('update', answer, params);
    }
  }
});
