window.TestApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.Routers.router =  new TestApp.Routers.Tests();
    this.Views.indexView = new TestApp.Views.TestsIndex();
    this.Views.editView = new TestApp.Views.TestsEdit();
    this.Collections.userList = new TestApp.Collections.Tests();
    this.Models.user = this.Models.user || {};
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TestApp.initialize();
});
