import Model from 'ember-data/model';
import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  author: DS.attr(),
  input: DS.attr(),
  question: DS.belongsTo('question', { async: true})
});
