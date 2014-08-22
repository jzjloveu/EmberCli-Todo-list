import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TodoListENV.locationType
});

Router.map(function() {
	this.resource('todos', { path: '/' }, function() {
    	this.route('active');
    	this.route('completed');
    });
});

export default Router;
