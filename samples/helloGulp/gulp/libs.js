var gulp = require("gulp");
var _ = require("lodash");
var path = require("path");

var appConfig = require("../appConfig")();

gulp.task("libs", function() {
    _.each(appConfig.bundle.externals, function(item) {
        var target = path.join(appConfig.dest, "libs");
        if (item.dest)
            target = path.join(target, item.dest);
        gulp.src(item.src)
            .pipe(gulp.dest(target));
    });
});