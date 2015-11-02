(function(){

  'use strict';
  var Vue = require('vue')
  console.log(Vue);

  var registerVM = new Vue({
    el: '.m-register',
    data: {},
    methods: {
      alert: function(){
        alert('alert');
      }
    }
  });


  require('./components/todo-register')


})();
