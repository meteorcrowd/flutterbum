Meteor.methods({
    'saveProject': function (project) {
        check(project.name, String);
        project.userId = Meteor.userId();
        project.dateEntered = new Date();
        project.lastUpdate = new Date();
        if ( !project.dateDue ) {
            project.dateDue = new Date();
        }
        if (!project.customer) {
            project.customer = undefined;
        }
        project.invited = [];
        return Projects.insert(project);
    }
});
