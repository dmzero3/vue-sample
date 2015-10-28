'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({pattern: ['gulp-*', 'gulp.*']});
var runSequence = require('run-sequence');

var config = require('../config');

gulp.task('stylus', function(){
  return gulp.src(config.src + '/css/stylus/**/*.styl')
    .pipe($.plumber())
    .pipe($.stylus())
    .pipe(gulp.dest(config.src + '/css'));
});
