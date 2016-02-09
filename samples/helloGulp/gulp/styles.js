var gulp = require('gulp');
var sass = require('gulp-sass');
var appConfig = require("../appConfig")();

gulp.task('style', function() {
    gulp.src(appConfig.style)
        .pipe(sass())
        .pipe(gulp.dest(appConfig.build));
});