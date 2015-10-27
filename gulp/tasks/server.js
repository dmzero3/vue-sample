'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({pattern: ['gulp-*', 'gulp.*']});
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

var config = require('../_config.json');


gulp.task('server', function(){
  var launch = function(){
    return function(){

      browserSync({
        server: {
          baseDir: config.path.src
        }
      });
    }
  };
  runSequence('stylus', 'jade-inject', launch());

});
