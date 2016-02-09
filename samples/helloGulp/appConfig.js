"use strict";

var path = require("path");
var args = require("yargs");

module.exports = function () {
    var client = "./client",
        build = "./build",
        dest = "./dist",
        node_module = path.join(__dirname, "node_modules");
        ;
        
    var isProd = function () {
        return args.ENV === "prod";
    };

    return {
        isProd: isProd(),
        appRoot: __dirname,
        browserSync: {
            server: {
                baseDir: [dest]
            },
            port: 4000,
            files: [
                dest + "/**"
            ],
            open: false
        },
        bundle: {
            html: "./index.html",
            entry: {
                app: "./app.ts"
            },
            externals: [
                { name: "jquery", src: "node_modules/jquery/dist/jquery.min.js"},
                { name: "angular", src: "node_modules/angular/angular.min.js"},
                { name: "lodash", src: "node_modules/lodash/lodash.js"},
                { name: "bootstrap-css", src: "node_modules/bootstrap/dist/css/bootstrap.min.css", dest:"bootstrap"},
                { name: "bootstrap-fonts", src: "node_modules/bootstrap/dist/fonts/*", dest:"bootstrap/fonts"},
            ]
        },
        style: client + "/**/*.scss",
        code: client + "/**/*.ts",
        html: client + "/**/*.html",
        client: client,
        build: build,
        dest: dest
    }
};
    

