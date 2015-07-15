TestApp.Views.TestsIndex = Backbone.View.extend({

    el: "#page",

    template: JST['tests/index'],

    events: {
        //"change #content": "filterName"
        "keyup #content": "filterName"
    },

    initialize: function () {
        this.$("#content").keyup(function () {
            console.log("test");
            var name = this.$("#content")[0].value;
            var filterCollection = TestApp.Collections.userList.where({name: name});
            this.render({collection: filterCollection});
        });
    },

    render: function (options) {
        var that = this;
        if (options.collection) {
            var list = options.collection;
            this.$el.html(this.template({users: list, search: options.search}));
            this.$("#content").focus();
            var val = this.$("#content").val();
            if (val != null) {
                //this.$("#content").val("");
                this.$("#content").val(val);
            }
        }
        else {
            var list = TestApp.Collections.userList;
            list.fetch({
                success: function (list) {
                    that.$el.html(that.template({users: list.models, search: null}));
                }
            });
        }


    },

    filterName: function () {
        var name = this.$("#content").val();

        var filterCollection = [];

        TestApp.Collections.userList.each(function (user) {
            var userName = user.get("name");

            var index = userName.indexOf(name);

            if (index == 0) {
                filterCollection.push(user);
            }

        });

        this.render({collection: filterCollection, search: name});

    }



});
