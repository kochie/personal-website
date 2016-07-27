/**
 * Created by Robert on 25/07/2016.
 */

var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages(
          {
            "remoteUrl": "git@github.com:kochie/kochie.github.io",
            "branch": "master"
          }


        ));
});
