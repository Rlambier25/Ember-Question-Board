import Ember from 'ember';

var question = [{
  id: 1,
  author: "Veruca Salt",
  description: "San Francisco",
}, {
  id: 2,
  author: "Mike TV",
  description: "Seattle",

}, {
  id: 3,
  author: "Violet Beauregarde",
  description: "Portland",

}];

export default Ember.Route.extend({
  model() {
    return question;
  },
});

// add once the firebase configuration is synced up
// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   model() {
//     return this.store.findAll('rental');
//   },
// });
