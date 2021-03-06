// import Ember from 'ember';
// import config from './config/environment';
//
// const Router = Ember.Router.extend({
//   location: config.locationType
// });
//
// Router.map(function() {
//   // this.route('index');
//   this.route('about');
//   this.route('contact');
//   this.route('answer');
//   this.route('question');
// });
//
// export default Router;


import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('answer', {path: '/answer/:answer_id'});
  this.route('question', {path: '/question/:question_id'});
});

export default Router;
