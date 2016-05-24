var SimpleModel = Backbone.Model.extend({
});

simpleModel = new SimpleModel({
  name: 'a1',
  description: 'super a1'
});

var SimpleView = Backbone.View.extend({
  tagName: 'li',
  id: 'todo-view',
  className: 'todo',
  template: _.template('<h3>' + 
    '<input type=checkbox ' +
    '<% if(status === "complete") print("checked") %>/>' +
    '<%= description %></h3>'),
  render: function(){
    var attributes = this.model.toJSON();
    this.$el.html(this.template(attributes));
  },
  events: {
    'click h3': 'alertStatus'
  },
  alertStatus: function(e) {
    // alert('h3 clicked');
  }
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