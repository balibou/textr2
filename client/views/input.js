Template.input.events({
  'submit form' : function (e,template) {
    e.preventDefault(); //ne marche pas ?
    e.stopPropagation();

    var message ={
      text: e.target.message.value,
      roomId: template.data._id
    };

    Meteor.call('messageInsert', message, function(error, messageId) {
      if (error){
        throwError(error.reason);
      }
      e.target.message.value = "";
    });
  }
});