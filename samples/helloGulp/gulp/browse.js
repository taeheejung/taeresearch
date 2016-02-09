var gulp = require("gulp");
var browserSync = require("browser-sync");
var appConfig = require("../appConfig")();

gulp.task("browse", ["bundle"], function() {
    browserSync(appConfig.browserSync);
});