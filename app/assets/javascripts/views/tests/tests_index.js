TestApp.Views.TestsIndex = Backbone.View.extend({

    el: "#container",

    template: JST['tests/index'],

    render: function(){
        console.log("render by view");

        this.$el.html(this.template({bob:1}));
    }


});
