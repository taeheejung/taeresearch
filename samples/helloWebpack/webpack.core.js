var path = require("path");
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");
var ClosureCompilerPlugin = require('webpack-closure-compiler');

module.exports = function (options) {
    var app = {
        source: {
            path: "./src/pimco.pacQueue.app",
            entry: "module.ts",
            template: path.join( Path, "index.html")
        },
        output: {
            path: options.Dev ? "./dev" : "./dist",
            port: 3000 
        }
    };

    var config = {
        context: app.source.Path,
        entry: app.source.entry,
        output: {
            filename: "bundle.js",
            path: app.output.Path
        },

        resolve: {
            moduleDirectories: ["node_modules", "bower_components", "web_modules"],
            extensions: ["", '.webpack.js', '.web.js', ".js", "jsx", ".ts", ".tsx"]
        },

        module: {
            loaders: [
                { test: /\.css$/, loader: "style!css" },
                { test: /\.tsx?$/, loader: "babel-loader!ts-loader" },
                { test: /\.scss$/, loader: 'style!css!sass' },
                { test: /\.html$/, loader: 'raw' },
                { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
                { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' }
            ]
        },
        plugins: []
    };

    if (options.Dev === true) {
        var browserSync = new BrowserSyncPlugin({
            host: 'localhost',
            port: app.output.port,
            server: {
                baseDir: app.output.Path
            },
            ui: false,
            online: false,
            notify: false
        });
        config.devtool = 'source-map';
        config.plugins.push(browserSync);
        config.devServer = {
            contentBase: app.output.path
        };
        config.plugins.push(new HtmlWebpackPlugin({
            template: app.source.template,
            inject: 'body',
            hash: true
        }));
    }

    return config;
}