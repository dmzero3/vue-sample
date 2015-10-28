'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({pattern: ['gulp-*', 'gulp.*']});

var config = require('../config');

gulp.task('webpack', function(){
  return gulp.src(config.webpack.entry)
    .pipe($.webpack(config.webpack))
    .pipe(gulp.dest(config.src));
});
