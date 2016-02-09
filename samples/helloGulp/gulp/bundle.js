"use strict";

var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var args = require("yargs");
var bundleConfig = require("./bundle.config")();


gulp.task ("bundle", function (done) {
    webpack(bundleConfig, function(err, stats){
        if (err) 
            throw new gutil.PluginError("webpack", err);
        
        gutil.log('[webpack]', stats.toString({
            // output options
        }));
        done();
    });
});