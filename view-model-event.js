var SimpleModel = Backbone.Model.extend({
  defaults: {
    status: 'incomplete'
  },
  url: 'localhost:3001',
  toggleStatus: function() {
    if (this.get('status') === 'incomplete') {
      this.set('status', 'complete');
    }else{
      this.set('status', 'incomplete');
    }
    // this.save();
  }
});

simpleModel = new SimpleModel({
  name: 'a1',
  description: 'super a1'
});

var SimpleView = Backbone.View.extend({
  initialize: function() {
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.remove, this);
  },
  tagName: 'li',
  id: 'todo-view',
  className: 'todo',
  template: _.template('<h3 class="<%= status %>">' + 
    '<input type=checkbox ' +
    '<% if(status === "complete") print("checked") %>/>' +
    '<%= description %></h3>'),
  render: function(){
    var attributes = this.model.toJSON();
    this.$el.html(this.template(attributes));
  },
  remove: function() {
    this.$el.remove();
  },
  events: {
    // 'click h3': 'alertStatus',
    'change input': 'toggleStatus'
  },
  alertStatus: function(e) {
    alert('h3 clicked');
  },
  toggleStatus: function() {this.model.toggleStatus();}
});
var simpleView = new SimpleView({
  model: simpleModel
});
simpleView.render();

$(document).ready(function() {
  console.log(simpleView.el);
  // taking a jquery object
  console.log(simpleView.$el);

  $('ul').append(simpleView.$el);
});