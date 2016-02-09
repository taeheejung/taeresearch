
"use strict";
var gulp = require("gulp");
var tslint = require("gulp-tslint");
var config = require("../appConfig")();

gulp.task("lint", function() {
    gulp
    .src(config.code)
    .pipe(tslint())
    .pipe(tslint.report("full"));
});