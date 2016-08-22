var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var cssmin = require('gulp-clean-css');

gulp.task('min-css', function() {
  return gulp.src('app/styles/*.css')
    .pipe(concat('all.css'))
    .pipe(cssmin({compatibility: 'ie8'}))
    .pipe(gulp.dest('deploy/styles'));
});

gulp.task('min-image', function(){
  gulp.src('app/images/**/*.+(jpeg|jpg|png|svg|gif)')
      .pipe(imagemin())
      .pipe(gulp.dest('deploy/images'))
});

gulp.task('min-js', function (cb) {
  pump([
        gulp.src('app/js/*.js'),
        concat('all.js'),
        uglify(),
        gulp.dest('deploy/js')
    ],
    cb
  );
});

gulp.task('min-html', function(cb) {
  pump([
    gulp.src('app/*.html'),
    htmlmin({collapseWhitespace: true}),
    gulp.dest('deploy')
  ],
  cb
);
});

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('app/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['app/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('app'))
});
