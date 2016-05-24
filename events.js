var ourObject = {};

_.extend(ourObject, Backbone.Events);

function dancing(msg) {
  console.log('We started: ' + msg);
}

ourObject.on('all', function(eventName) {
  console.log('The nane of event passed was: ' + eventName);
});
ourObject.on('dance:tap', dancing);

ourObject.trigger('dance:tap', 'tap dancing. Yeah!');
ourObject.trigger('dance:break', 'break dancing. Yeah!');
ourObject.trigger('dance', 'geral dancing. Yeah!');