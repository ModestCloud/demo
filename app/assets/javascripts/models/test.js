TestApp.Models.Test = Backbone.Model.extend({
    defaults: {
        name: "",
        email: "",
        age: 0
    },

    urlRoot: "/users",

    validate: function(attr){
        if(attr.name.length < 6){
            return "Name should not less than six characters!";
        }
    }



});
