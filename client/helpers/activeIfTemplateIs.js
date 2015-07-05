Template.registerHelper('activeIfTemplateIs', function (template){
  var currentRoute = Router.current();
  console.log(currentRoute.lookupTemplate());
  console.log(template);
  return currentRoute &&
    template === currentRoute.lookupTemplate() ? true : false;
});
