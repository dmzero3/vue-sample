'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({pattern: ['gulp-*', 'gulp.*']});
var mainBowerFiles = require('main-bower-files');
var runSequence = require('run-sequence');

var config = require('../_config.json');

gulp.task('jade', function(){
  return gulp.src([config.path.src + '/views/**/*.jade', '!' + config.path.src + '/views/**/_*.jade'])
    .pipe($.jade({ pretty: true }))
    .pipe(gulp.dest(config.path.dist));
});

gulp.task('inject', function(){

  return gulp.src(config.path.dist + '/**/*.html')
    .pipe($.inject(gulp.src(mainBowerFiles(), {read: false}), {relative: true}))
    .pipe(gulp.dest(config.path.dist));
});

gulp.task('jade-inject', function(cb){
  runSequence('jade', 'inject', cb);
});
