App = Ember.Application.create();

App.Router.map(function() {
  this.route('index', { path: '/' }); // Not needed but I like the explicitness!
  this.route('login')
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.LoginRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.LoginController = Ember.Controller.extend({
  actions: {
    login: function() {
      console.log("Clicked Login!")
    }
  }
})
