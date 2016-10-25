// modified from generator-jekyllized 1.0.0-rc.6
'use strict';
const gulp       = require('gulp');
const requireDir = require('require-dir');
const tasks      = requireDir('./gulp/tasks', {recurse: true}); // eslint-disable-line

const ghPages     = require('gulp-gh-pages');


// 'gulp inject' -- injects CSS and JS into includes
gulp.task('inject', gulp.parallel('inject:scripts'));


// put css to prod
// gulp.task('putCss', function () {
//   gulp.src(['dist/assets/stylesheets/*.css'])
//   .pipe(gulp.dest('dist/assets/stylesheets/*.css'))
// });

// 'gulp build:site' -- copies, builds, and then copies it again
gulp.task('build:site', gulp.series('site:tmp', 'inject', 'site', 'copy:site'));

// 'gulp assets' -- removes assets and rebuilds them
// 'gulp assets --prod' -- same as above but with production settings
gulp.task('assets', gulp.series(
  gulp.parallel('styles', 'scripts', 'fonts'),
  gulp.series('images', 'copy:assets')
));

// 'gulp clean' -- removes assets and gzipped files
gulp.task('clean', gulp.parallel('clean:assets', 'clean:gzip', 'clean:dist', 'clean:site'));

// 'gulp build' -- same as 'gulp' but doesn't serve site
// 'gulp build --prod' -- same as above but with production settings
gulp.task('build', gulp.series('clean', 'assets', 'build:site', 'html'));

// 'gulp critical' -- builds critical path CSS includes
// WARNING: run this after substantial CSS changes
// WARNING: .html files referenced need to exist. run after `gulp build` to ensure.
gulp.task('critical', gulp.series('critical:glitch', 'critical:article', 'critical:archive'));

// 'gulp deploy' -- deploy site to production and submit sitemap XML
// **
// gulp build --prod deploy
// **
gulp.task('deploy', gulp.series('upload', 'cname'));

// Deploy
// put CNAME
// gulp.task('cname', function() {
//   return gulp.src(['CNAME'])
//   .pipe(gulp.dest('dist'))
// });
// gulp.task('deploygh', function() {
//   return gulp.src('./dist/**/*')
//   .pipe(ghPages());
// });

// 'gulp rebuild' -- WARNING: removes all assets, images, and built site
gulp.task('rebuild', gulp.series('clean', 'clean:images'));

// 'gulp check' -- checks your Jekyll site for errors
gulp.task('check', gulp.series('site:check'));

// 'gulp' -- removes assets and gzipped files, creates assets and injects
// them into includes or layouts, builds site, serves site
// 'gulp --prod' -- same as above but with production settings
gulp.task('default', gulp.series('build', 'serve'));
