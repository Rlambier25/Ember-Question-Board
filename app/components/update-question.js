import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm(){
      this.set('updateQuestionForm', true);
  },
  update(question) {
    var params = {
      questionAuthor: this.get('questionAuthor'),
      question: this.get('question'),
      notes: this.get('notes'),
      answers: this.get('answers'),
    };
    this.set('updateQuestionForm', false);
    this.sendAction('update', question, params);
   }
  }
});
