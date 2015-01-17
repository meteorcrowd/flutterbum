Meteor.publishComposite("items", function() {
  return {
    find: function() {
      return Items.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});
Meteor.publish('projects', function () {
    return Projects.find({});
});
Meteor.publish('customers', function () {
    return Customers.find();
});
Meteor.publish('calevents', function (project) {
    return Calevents.find({project: project});
});
Meteor.publish('conversations', function (project) {
    return Conversations.find({project: project});
});
Meteor.publish('todos', function (project) {
    return Todos.find({project: project});
});
Meteor.publish('uploads', function (project) {
    return Uploads.find({project: project});
});
