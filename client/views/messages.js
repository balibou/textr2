Template.messages.helpers({
  msgs: function() {
    return Messages.find({roomId: this._id});
  },
});

Template.messages.onRendered(function () {
  var instance = this;
  var query = Messages.find({roomId: this._id});
  
  instance.autorun(function () {
    query.observeChanges({
      added: function () {
        console.log('test');
      }
    });
  });
});
