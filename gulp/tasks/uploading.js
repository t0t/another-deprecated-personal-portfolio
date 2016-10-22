'use strict';
const fs            = require('fs');
const gulp          = require('gulp');
// const rsync         = require('gulp-rsync');
const ghPages     = require('gulp-gh-pages');

gulp.task('cname', function() {
  return gulp.src(['CNAME'])
  .pipe(gulp.dest('dist'))
});

// 'gulp upload' -- reads rsync credentials file and incrementally uploads site to server
gulp.task('upload', () => {
  return gulp.src('./dist/**/*')
  .pipe(ghPages());
});


// gulp build --prod cname upload
