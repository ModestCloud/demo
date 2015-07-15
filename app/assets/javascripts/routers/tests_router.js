TestApp.Routers.Tests = Backbone.Router.extend({
    routes: {
        "": "index",
        "new": "editUser",
        "edit/:id": "editUser"
    },

    initialize: function () {

    },

    index: function () {
        TestApp.Views.indexView.render({});
    },

    editUser: function (id) {
        TestApp.Views.editView.render({id: id});
    }
});
