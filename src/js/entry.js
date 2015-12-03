(function(){

  'use strict';
  var Vue = require('vue')

  var atndVM = new Vue({
    el: '#vm-atnd',
    data: {
      items: [
        {
          event: {
            title: 'ダミータイトル1'
          }
        },
        {
          event: {
            title: 'ダミータイトル2'
          }
        }
      ]
    },
    methods: {
      renderAtnd: function(){
        var self = this;
        var API_URL = 'http://api.atnd.org/events/?format=jsonp';
        $.ajax({
          type: 'GET',
          url: API_URL,
          dataType: 'jsonp',
          success: function(data){

            var items = data.events;
            self.$data.items = items;
          },
          error: function(){

          }
        });
      }
    }
  });


  // require('./components/todo-register')


})();
