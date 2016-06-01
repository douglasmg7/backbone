var Todo = Backbone.Model.extend({
  defaults: {
  }
});

var Todos = Backbone.Collection.extend({
//   url: 'http://jsonplaceholder.typicode.com/users'
  url: 'http://localhost:3000/posts'
});

var todos = new Todos();
todos.fetch({
  success: function(){
    console.log('success');
    console.log(todos.length);
    console.log(Object.keys(todos));
//     console.log(todos.get(1).get('name')); // by id   
//     console.log(todos.at(1).get('name')); // by index
    console.log(todos.get(1).get('title')); // by id   
    console.log(todos.at(1).get('title')); // by index    
  },
  error: function(model, xhr, options){
    // console.log(Object.keys(xhr).sort());
    // console.log(Object.keys(options));
    // console.log(xhr.responseText);
    // console.log(xhr.statusText);
    // console.log(options.error());
  }
});
console.log('reuqested');