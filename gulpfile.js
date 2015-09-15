'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({pattern: ['gulp-*', 'gulp.*']});

var config = require('./_config.json');

gulp.task('jade', function(){
  return gulp.src(config.path.src + '/views/**/*.jade')
    .pipe($.jade({ pretty: true }))
    .pipe(gulp.dest(config.path.dist));
});
