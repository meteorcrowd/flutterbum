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
            return this.subscribe("items");
        },
        data: {
            items: Items.find({})
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

    this.route('notFound', {
        path: '*',
        where: 'server',
        action: function() {
            this.response.statusCode = 404;
            this.response.end(Handlebars.templates['404']());
        }
    });

});
