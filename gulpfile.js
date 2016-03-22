'use strict';

const babel = require('gulp-babel');
const browserify = require('browserify');
const del = require('del');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const source = require('vinyl-source-stream');

gulp.task('clean', (done) => {
  del(['build/'], done);
});

gulp.task('js', () => {
  return gulp
    .src(['src/**/*.js'])
    .pipe(eslint({}))
    .pipe(eslint.format())
    .pipe(babel())
    .on('error', function(err) {
      console.error(err.stack || err.message || err);
      this.emit('end');
    })
    .pipe(gulp.dest('build/'));
});

gulp.task('js-fast', () => {
  return gulp
    .src(['src/**/*.js', '!src/**/*.spec.js'])
    .pipe(babel())
    .on('error', function(err) {
      console.error(err.stack || err.message || err);
      this.emit('end');
    })
    .pipe(gulp.dest('build/'));
});

const jsBrowserify = function() {
  return browserify({
      debug: false, // true,
      detectGlobals: true,
      bundleExternal: false,
      standalone: 'etherscan'
    })
    .require('./build/index.js', { expose: 'etherscan' })
    .bundle()
    .pipe(source('browser.js'))
    .pipe(gulp.dest('build/'));
};

gulp.task('js-web', ['js'], () => {
  return jsBrowserify();
});

gulp.task('js-web-fast', ['js-fast'], () => {
  return jsBrowserify();
});

gulp.task('test', ['js'], () => {
  return gulp
    .src(['build/**/*.spec.js'])
    .pipe(mocha({ timeout: 180000 }));
});

gulp.task('fast', ['js-fast', 'js-web-fast']);
gulp.task('default', ['js', 'js-web']);
