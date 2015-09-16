'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({pattern: ['gulp-*', 'gulp.*']});

var config = require('../_config.json');

gulp.task('watch', function(){
  var jade = [config.path.src + '/views/**/*.jade', '!' + config.path.src + '/views/**/_*.jade'];

  gulp.watch(jade, ['jade']);
});