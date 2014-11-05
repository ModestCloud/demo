TestApp.Routers.Tests = Backbone.Router.extend({
    routes:{
        "": "index",
    },

    initialize: function(){
      this.list = new TestApp.Collections.Tests();
      this.list.fetch({
          success: function(list){
              console.log(list.length);
          }
      });
    },

    index: function(){
        var view = new TestApp.Views.TestsIndex();
        view.render();
    }
});
