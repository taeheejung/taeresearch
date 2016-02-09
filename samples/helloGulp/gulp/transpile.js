"use strict";

var gulp = require("gulp");
var typescript = require("gulp-typescript");
var config = require("../appConfig")();

gulp.task("transpile", ["lint"], function() {
    var compilerOptions = {
        "target": "es5",
        "module": "commonjs",
    };
    
    return gulp.src(config.ts)
        .pipe(typescript(compilerOptions))
        .pipe(gulp.dest(config.build));
});

