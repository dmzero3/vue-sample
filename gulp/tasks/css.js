'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({pattern: ['gulp-*', 'gulp.*']});
var runSequence = require('run-sequence');

var config = require('../_config.json');

gulp.task('stylus', function(){
  return gulp.src(config.path.src + '/css/stylus/**/*.styl')
    .pipe($.plumber())
    .pipe($.stylus())
    .pipe(gulp.dest(config.path.src + '/css'));
});
