$(document).ready(function(){
  var TodoItem = Backbone.Model.extend({
    // url: 'http://localhost:3000/todos/',
    // ulrRoot: 'http://localhost:3000/todos/',
    url: function() {
      return 'http://localhost:3000/todos/' + this.id;
    },
    initialize: function() {
      this.on('change', function(model, options) {
        // console.log(model);
        console.log(options);
        console.log('change-event');
        console.log('id: ' + model.get('id'));
        console.log('title: ' + model.get('title'));
        console.log('it: ' + model.get('it'));
        console.log(JSON.parse(options.xhr.responseText));
        $('.log').append('title: ' + todoItem.get('title'));        
      });          
    },
    parse: function(response) {
      response.it = response.id + '-' + response.title;
      return response;
    },
    toJSON: function() {
      
    }
  });

  var todoItem = new TodoItem({id: 1});
  todoItem.fetch();
  var te = 4;
});
