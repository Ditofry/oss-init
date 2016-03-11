import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return ['ember.js', 'rust lang', 'jQuery']
  }
});
