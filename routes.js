var SimpleView = Backbone.View.extend({});

todoRouter =  new (Backbone.Router.extend({
  routes: {
    'user/:id': 'user_id',
    '': 'general', // routes.html
    'about': 'showAbout' // routes.html#about
  },
  showAbout: function() {
    console.log('router: showAbout');
    this.txt = 'router: showAbout';
    $('.log').html(todoRouter.txt);  
  },
  general: function() {
    console.log('router: general');
    this.txt = 'router: general';
    $('.log').html(todoRouter.txt);  
  },
  user_id: function(id) {
    if (id === '7') {
      console.log('user_id-redirection');
      this.navigate('#user/17', {trigger: true});
    } 
    else {
      console.log('user_id: ' + id);
      $('.log').html('user-id: ' + id);
    }
  },
  initialize: function(options) {
    this.simpleView = new SimpleView();
    // console.log(options.simpleView.el);
  },
  start: function() {
    Backbone.history.start();
    // Backbone.history.start({pushState: true}); // use express to route the same page
    // Backbone.history.start({pushState: true, hasChange: false});
  }
}))();


$(document).ready(function() {
  todoRouter.start();
});