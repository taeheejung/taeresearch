var gulp = require("gulp");
var del = require("del");
var path = require("path");
var appConfig = require("../appConfig")();

gulp.task("clean", function(done) {
   del([appConfig.dest, appConfig.build], done);
});

gulp.task("clean-libs", function(done) {
    var target = path.join(appConfig.dest, "libs");
    del([target], done);
});