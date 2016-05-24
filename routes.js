TodoRouter = Backbone.Router.extend({
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
    console.log('user_id: ' + id);
    $('.log').html('user-id: ' + id);
  },
  initialize: function() {
  }
});

var todoRouter = new TodoRouter();

// Backbone.history.start();
Backbone.history.start({pushState: true, hasChange: false});

var SimpleView = Backbone.View.extend({});
var simpleView = new SimpleView();
console.log(simpleView.el);

$(document).ready(function() {
  $('.log').html(todoRouter.txt);  
});