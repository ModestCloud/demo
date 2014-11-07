TestApp.Views.TestsIndex = Backbone.View.extend({

    el: "#page",

    template: JST['tests/index'],

    render: function () {
        var that = this;
        var list = TestApp.Collections.userList;
        list.fetch({
            success: function (list) {
                that.$el.html(that.template({users: list.models}));
            }
        });

    }


});
