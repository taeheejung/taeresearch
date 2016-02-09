var gulp = require("gulp");
var config = require("../appConfig")();

gulp.task("markup", function() {
   gulp.src(config.markup)
        .pipe(gulp.dest(config.dest));
});