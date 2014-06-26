
var gulp = require('gulp');

gulp.task('watch', function () {
  return gulp.watch(
    [
      'lib/**/*',
      'index.html',
      'prod.html'
    ],
    [
      'jshint',
      'live-reload'
    ]
  )
});