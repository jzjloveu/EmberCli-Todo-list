import Ember from 'ember';
 
var IndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('todos');
  }
});

export default IndexRoute;