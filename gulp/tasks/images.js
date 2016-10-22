'use strict';
const cache    = require('gulp-cache');
const changed  = require("gulp-changed");
const filter   = require('gulp-filter');
const glob     = require('glob');
const gulp     = require('gulp');
const gulpif   = require('gulp-if');
const imagemin = require('gulp-imagemin');
const merge2   = require('merge2');
const newer    = require('gulp-newer');
const notify   = require('gulp-notify');
const rename   = require('gulp-rename');
const resize   = require('./resize-images');
const size     = require('gulp-size');
const util     = require('gulp-util');

// 'gulp images' -- resizes, optimizes, and caches images
gulp.task('images', () =>
  gulp.src(['src/assets/images/**/*', '!src/assets/images/{feature,feature/**}']) // do not process feature images
    .pipe(newer('dist/assets/images'))
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng(),
      imagemin.svgo({plugins: [{cleanupIDs: false}]})
    ]))
    .pipe(gulp.dest('dist/assets/images'))
    .pipe(size({title: 'images'}))
);

// feature image resize values
var options = [
  { width: 320, upscale: false },
  { width: 768, upscale: true },
  { width: 1024, upscale: true },
  { width: 1600, upscale: true }
];
