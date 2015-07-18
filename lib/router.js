Router.configure({
    layoutTemplate: 'masterLayout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'pageNotFound',
    yieldTemplates: {
        nav: {to: 'nav'},
        footer: {to: 'footer'},
    },
    waitOn: function() { 
      return [Meteor.subscribe("chatrooms"), Meteor.subscribe("onlusers"), Meteor.subscribe("messages"), Meteor.subscribe('notifications')]
    }
});

Router.map(function() {
    this.route('home', {
        path: '/',
    });

    this.route('private');
    this.route('chat');
    Router.route('/user',{
      name:'user',
      data: function () { return Meteor.users.findOne({_id: Meteor.userId()});}
    });

    this.route('/chatroom/:_id',{
      name:'chatroom',
      data: function () { return ChatRooms.findOne(this.params._id);}
    });
});

Router.plugin('ensureSignedIn', {
  only: ['chat','user','chatroom']
});