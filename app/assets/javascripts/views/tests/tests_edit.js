/**
 * Created by ZHICHEN on 11/5/14.
 */

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

TestApp.Views.TestsEdit = Backbone.View.extend({
    el: "#page",

    template: JST['tests/edit'],

    events: {
      'submit .edit-user-form': 'saveUser',
      'click .delete': 'deleteUser'
    },

    render: function(options){
        var that = this;
        if(options.id){
            TestApp.Models.user = new TestApp.Models.Test({id: options.id});
            var user = TestApp.Models.user;
            user.fetch({
                success: function(user){
                    that.$el.html(that.template({user: user}));
                }
            });
        }
        else{
            this.$el.html(this.template({user: null}));
        }
    },

    saveUser: function(ev){
        //console.log($(ev.currentTarget));
        var a = $(ev.currentTarget).serializeObject();
        var user = new TestApp.Models.Test(a);
        user.on("invalid", function(){
            alert(user.validationError);
        })
        user.save(a, {
            success: function(){
                TestApp.Routers.router.navigate("",{ trigger: true});
            }
        })
        return false;
    },

    deleteUser: function(ev){
        var user = TestApp.Models.user;
        user.destroy({
            success: function(){
                TestApp.Routers.router.navigate("",{ trigger: true});
            }

        });
        return false;
    }



});