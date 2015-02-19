'use strict';

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var rename = require('gulp-rename');

gulp.task('dist', ['bower'], function () {
  return gulp.src('src/[ENTRY POINT]')
    .pipe(webpack({
      output: { libraryTarget: 'umd' },
      externals:  {
        backbone: {
          amd: 'backbone',
          commonjs: 'backbone',
          commonjs2: 'backbone',
          root: 'Backbone'
        },
        underscore: {
          amd: 'underscore',
          commonjs: 'underscore',
          commonjs2: 'underscore',
          root: '_'
        }
      }
    }))
    .pipe(rename('[OUTPUT FILE NAME]'))
    .pipe(gulp.dest('dist'));
});
