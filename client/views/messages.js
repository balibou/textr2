Template.messages.helpers({
  msgs: function() {
    return Messages.find({roomId: this._id});
  }
});