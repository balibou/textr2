Router.configure({
    layoutTemplate: 'masterLayout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'pageNotFound',
    yieldTemplates: {
        nav: {to: 'nav'},
        footer: {to: 'footer'},
    }
});

Router.map(function() {
    this.route('home', {
        path: '/',
    });

    this.route('private');
    this.route('chat');
    Router.route('/user/:_id',{
      name:'user',
      data: function () { return Meteor.users.findOne(this.params._id);}
    });

});

Router.plugin('ensureSignedIn', {
  only: ['chat','user']
});
