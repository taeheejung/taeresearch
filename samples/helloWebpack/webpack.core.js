var path = require("path");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = function (options) {
    var app = {
        source: {
            context: path.join(__dirname, "src/pimco.pacQueue.app"),
            entry: "./module.ts",
            template: "index.html"
        },
        output: {
            path: path.join(__dirname, options.Dev ? "./dev" : "./dist"),
            port: 3000 
        }
    };

    var config = {
        context: app.source.context,
        entry: app.source.entry,
        output: {
            filename: "bundle.js",
            path: app.output.path
        },

        resolve: {
            moduleDirectories: ["node_modules"],
            extensions: ["", '.webpack.js', '.web.js', ".js", "jsx", ".ts", ".tsx"]
        },

        module: {
            loaders: [
                { test: /\.css$/, loader: "style!css" },
                { test: /\.tsx?$/, loader: "ts-loader" },
                { test: /\.scss$/, loader: 'style!css!sass' },
                { test: /\.html$/, loader: 'raw' },
                { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
                { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' }
            ]
        },
        plugins: []
    };

    if (options.Dev === true) {
        config.watch = true;
        config.devtool = 'source-map';
        config.devServer = {
            contentBase: app.output.path
        };

        var browserSync = new BrowserSyncPlugin({
            host: 'localhost',
            port: app.output.port,
            server: {
                baseDir: app.output.path
            },
            ui: false,
            online: false,
            notify: false
        });
        config.plugins.push(browserSync);
        config.plugins.push(new HtmlWebpackPlugin({
            template: app.source.template,
            inject: 'body',
            hash: true
        }));
    }

    return config;
}