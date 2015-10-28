'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({pattern: ['gulp-*', 'gulp.*']});
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

var config = require('../config');


gulp.task('server', function(){
  var launch = function(){
    return function(){

      browserSync({
        server: {
          baseDir: config.src
        }
      });
    }
  };
  runSequence('webpack', 'stylus', 'jade-inject', launch());

});
