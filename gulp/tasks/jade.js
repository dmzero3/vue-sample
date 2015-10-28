'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({pattern: ['gulp-*', 'gulp.*']});
var mainBowerFiles = require('main-bower-files');
var runSequence = require('run-sequence');

var config = require('../config');

gulp.task('jade', function(){

  var jadeDir = config.src + '/jade';
  var opt = {
    pretty: true,
    basedir: jadeDir
  }
  return gulp.src([jadeDir + '/views/**/*.jade', '!' + jadeDir + '/views/**/_*.jade'])
    .pipe($.plumber())
    .pipe($.jade(opt))
    .pipe(gulp.dest(config.src));
});

gulp.task('inject', function(){

  return gulp.src(config.src + '/**/*.html')
    .pipe($.inject(gulp.src(mainBowerFiles(), {read: false}), {relative: true}))
    .pipe(gulp.dest(config.src));
});

gulp.task('jade-inject', function(cb){
  runSequence('jade', 'inject', cb);
});
