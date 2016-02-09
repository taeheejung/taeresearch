var gulp = require("gulp");
var config = require("../appConfig")();
 
gulp.task("watch", function() {
   gulp.watch(config.ts, ['webpack']);
});