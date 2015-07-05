Template.registerHelper('activeIfTemplateIs', function (template){
  var currentRoute = Router.current();
  return currentRoute &&
    template === currentRoute.lookupTemplate() ? true : false;
});

Template.registerHelper('activeIfProfileIs', function (){
  var userId = this.userId;
  var user = Meteor.userId();
  console.log(userId);
  if (this.userId === user){
    return 'message_profile-pic2'
  } else {
    return 'message_profile-pic3'
  }
});