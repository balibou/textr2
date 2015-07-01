Template.user.helpers({
  user: function(){
    return Meteor.user();
  }
});

AutoForm.addHooks('user-profile-form', {
    onSuccess: function (formType, result) {
        Router.go('chat')
    }
});