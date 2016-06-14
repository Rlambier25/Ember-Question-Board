// import Model from 'ember-data/model';
// import DS from 'ember-data';
// // import attr from 'ember-data/attr';
// // import { belongsTo, hasMany } from 'ember-data/relationships';
//
// export default Model.extend({
//   question: DS.attr(),
//   questionAuthor: DS.attr(),
//   notes: DS.attr(),
//   answers: DS.hasMany('answer', { async: true})
// });


import DS from 'ember-data';

export default DS.Model.extend({
  questionAuthor: DS.attr(),
  question: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
