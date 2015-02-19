'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function () {
  return gulp.src(['./spec/setup.js', './spec/**/*.spec.js'], { read: false })
    .pipe(mocha({ reporter: 'spec' }));
});
