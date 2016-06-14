import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },

  actions: {
    save3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('index');
    },
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
    // Must add UPDATE & DELETE FUNCTION HERE. Already have Update Question and Answer in components. Must add correct code and syntax to complete
  }
});

// add once the firebase configuration is synced up
// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   model() {
//     return this.store.findAll('rental');
//   },
// });
