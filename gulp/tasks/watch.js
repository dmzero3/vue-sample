'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({pattern: ['gulp-*', 'gulp.*']});
var browserSync = require('browser-sync');

var config = require('../_config.json');

gulp.task('watch', ['server'], function(){
  var jade = [config.path.src + '/views/**/*.jade', '!' + config.path.src + '/views/**/_*.jade'];
  var stylus = [config.path.src + '/stylus/**/*.styl'];

  gulp.watch(jade, ['jade-inject', browserSync.reload]);
  gulp.watch(stylus, ['stylus', browserSync.reload]);
});
