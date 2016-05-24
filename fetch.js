var Todo = Backbone.Model.extend({
  defaults: {
  }
});

var Todos = Backbone.Collection.extend({
//   url: 'http://jsonplaceholder.typicode.com/users'
  url: 'http://localhost:3001/todos',
  events: {
    'change': 'updateModel'
  },
  updateModel: function(){
    console.log('events: model changed!');
  }  
});

var todos = new Todos();
todos.on('change', function(model) {
  console.log('on: model changed to:' + model.get('title'));
});

todos.fetch({
  success: function(){
    // console.log('success:');
    // console.log(todos.length);
    // console.log(Object.keys(todos));
    // get by index
    // console.log(todos.at(1).get('title'));
    // get by id
    var todo_1 = todos.get(1);
    var todo_2 = todos.get(2);
    var title_1 = todo_1.get('title');
    var title_2 = todo_2.get('title');
    // console.log(title_1);
    // console.log(title_2);    

    // todo_2.on('change', function(model) {
    //   console.log('model changed, id: ' + model.get('id'));
    // });

    // change the value    
    todo_1.set('title', title_1 + '.');
    todo_1.save();
    todo_2.set('title', title_2 + '.');
    todo_2.save();

    console.log('end');
  },  
  error: function(col, res, opt){
    console.log('error:');
    console.log(Object.keys(res).sort());
    console.log(Object.keys(opt));
    console.log(res.responseText);
    console.log(res.statusText);
    console.log(opt.error());
  }
});
  
console.log('reuqested');