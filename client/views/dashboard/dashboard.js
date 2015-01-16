Template.dashboard.rendered = function() {

};
Template.dashboard.events({
    'keyup input[type=text]': function (event, template) {
        if (event.which === 27 || event.which === 13) {
            event.preventDefault();
            var project = {};
            project.name = template.find("#projectNameEnter").value;
            Meteor.call('saveProject', project);
        }
    }
});
