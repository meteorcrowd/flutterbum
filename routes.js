Router.map(function() {

    this.route('home', {
        path: '/',
        layoutTemplate: ''
    });
    this.route('customers', {
        path: '/customers',
        layoutTemplate: 'mainLayout'
    });
    this.route('archives', {
        path: '/archives',
        layoutTemplate: 'mainLayout'
    });
    this.route('roles', {
        path: '/roles',
        layoutTemplate: 'mainLayout'
    });

    this.route('dashboard', {
        path: '/dashboard',
        loginRequired: 'entrySignIn',
        waitOn: function() {
            return Meteor.subscribe("projects");
        },
        data: {
            projects: Projects.find({})
        },
        onAfterAction: function() {
            SEO.set({
                title: 'Dashboard | ' + SEO.settings.title
            });
        }
    });

    this.route('profile', {
        path: '/profile',
        data: function() {
            return Meteor.user();
        }
    });

    this.route('projectView', {
        path: '/projects/:_id',
        layoutTemplate: 'mainLayout',
        loginRequired: 'entrySignIn',
        waitOn: function () {
            Meteor.subscribe('customers');
            Meteor.subscribe('conversations', this.params._id);
            Meteor.subscribe('todos', this.params._id);
            Meteor.subscribe('calevents', this.params._id);
            Meteor.subscribe('uploads', this.params._id);
            return Meteor.subscribe('projects');
        },
        data: function () {
            return Projects.findOne(this.params._id);
        },
        onAfterAction: function () {
            SEO.set({
                title: 'Project View | ' + SEO.settings.title
            })
        }
    });

    this.route('notFound', {
        path: '*',
        where: 'server',
        action: function() {
            this.response.statusCode = 404;
            this.response.end(Handlebars.templates['404']());
        }
    });

});
