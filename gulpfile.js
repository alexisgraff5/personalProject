var gulp = require( 'gulp');
var concat = require( 'gulp-concat');
var sass = require( 'gulp-sass');
var babel = require( 'gulp-babel');
var plumber = require( 'gulp-plumber');

const paths = {
  jsSource: ['./public/js/**/*.js', './public/js/*.js'],
  jsDest: './public'
};

gulp.task('frontjs', () => {
  return gulp.src(paths.jsSource)
  .pipe(plumber())
  .pipe(babel({
    presets: ["es2015"]
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest(paths.jsDest));
});

// gulp.task('server', () => {
//   return gulp.src(paths.jsSource)
//   .pipe(plumber())
//   .pipe(babel({
//     presets: ["es2015"]
//   }))
//   .pipe(concat('bundle.js'))
//   .pipe(gulp.dest(paths.jsDest));
// });

gulp.task('watch', () => {
  gulp.watch(paths.jsSource, ['frontjs']);
});

gulp.task('default', ['watch', 'frontjs']);
