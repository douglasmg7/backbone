var TodoItem = Backbone.Model.extend({
  defaults: {
    status: 'incomplete'
  },
  url: 'localhost:3001'
});

var TodoList = Backbone.Collection.extend({
  model: TodoItem
});
var todoList = new TodoList();
todoList.add(new TodoItem({name: 'a1', description: 'super a1'}));
todoList.add(new TodoItem({name: 'b1', description: 'super b1'}));
todoList.add(new TodoItem({name: 'c1', description: 'super c1'}));

var TodoView = Backbone.View.extend({
  tagName: 'li',
  template: _.template('<h3><%= description%></h3>'),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    console.log('rendered todoView');
    return this;
  }
});

var TodoListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('add', this.addOne, this);
  },
  render: function(){
    this.collection.forEach(this.addOne, this);
  },
  addOne: function(todoItem) {
    var todoView = new TodoView({model: todoItem});
    this.$el.append(todoView.render().el);
  }
});

var todoListView = new TodoListView({collection: todoList});
todoListView.render();

todoList.add(new TodoItem({name: 'c4', description: 'super c4'}));

$(document).ready(function() {
  $('ul').append(todoListView.$el);
});