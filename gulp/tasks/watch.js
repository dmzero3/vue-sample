'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({pattern: ['gulp-*', 'gulp.*']});
var browserSync = require('browser-sync');

var config = require('../config');

gulp.task('watch', ['server'], function(){
  var jadeFiles = [config.src + '/jade/views/**/*.jade', '!' + config.src + '/jade/views/**/_*.jade'];
  var stylusFiles = [config.src + '/stylus/**/*.styl'];
  var jsFiles = [config.src + '/js/**/*.js'];

  gulp.watch(jadeFiles, ['jade-inject', browserSync.reload]);
  gulp.watch(stylusFiles, ['stylus', browserSync.reload]);
  gulp.watch(jsFiles, ['webpack', browserSync.reload]);
});
