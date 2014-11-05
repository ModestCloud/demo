window.TestApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new TestApp.Routers.Tests();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TestApp.initialize();
});
