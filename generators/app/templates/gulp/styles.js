'use strict';

var gulp = require('gulp');
var conf = require('./conf');
var sass = require('gulp-sass');
var flatten = require('gulp-flatten');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var path = require('path');
var join = path.join;

/*
 * sass task compiles sass files to css
 */
gulp.task('sass', function () {

  var env = conf.getEnv(this) === 'dev' ? conf.paths.tmp : conf.paths.dist;

  return gulp.src([
    join(__dirname, conf.paths.src, '**/*.{sass,scss}'),
    join('!', __dirname, conf.paths.src, 'assets', '**/*.{sass,scss}')])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(join(__dirname, env)));
});

/*
 * sass task compiles partials sass files to css
 */
gulp.task('partials', function () {

  var env = conf.getEnv(this) === 'dev' ? conf.paths.tmp : conf.paths.dist;

  return gulp.src(join(__dirname, conf.paths.src, 'assets', '**/*.{sass,scss}'))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(join(__dirname, env, 'assets/styles')));
});

/*
 * Import fonts from bower_components
 */
gulp.task('fonts', function () {

  var env = conf.getEnv(this) === 'dev' ? conf.paths.tmp : conf.paths.dist;

  return gulp.src(join(__dirname, conf.paths.bower, '/**/*.{eot,svg,ttf,woff,woff2}'))
    .pipe(flatten())
    .pipe(gulp.dest(join(__dirname, env, 'fonts')));
});

gulp.task('styles', function (done) {
  runSequence('sass', 'partials', 'fonts', done);
});
