import Model from 'ember-data/model';
import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  questionAuthor: DS.attr(),
  question: DS.attr(),
  notes: DS.attr(),
  answer: DS.hasMany('answer', { async: true})
});
