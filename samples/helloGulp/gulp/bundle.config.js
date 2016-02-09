var path = require('path');
var webpack = require("webpack");
var _ = require("lodash");
var appConfig = require("../appConfig")();
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function () {
    var webpackConfig =  {
        context: path.join(appConfig.appRoot, appConfig.client),
        entry: appConfig.bundle.entry,
        output: {
            path: path.join(appConfig.appRoot, appConfig.dest),
            filename: 'app.js'
        },
        externals: {
          "angular": "angular",
          "jquery": "jQuery",
          "lodash": "_"
        },
        resolve: {
            root: [
                path.join(appConfig.appRoot, 'node_modules')
            ],
            alias: {},
            extensions: ['', '.js','.css', ".ts", ".scss"]
        },
        module: {
            loaders: [
                { test: /\.ts$/, loader: 'ts-loader'},
                { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css?sourceMap", "sass?sourceMap") },
                { test: /\.html$/, loader: 'html' },
                // // bootstrap
                // { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css?sourceMap") },
                // { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: "file?name=assets/[name].[ext]" },
                // { test: /\.(woff|woff2)$/, loader:"url?name=assets/[name].[ext]&prefix=font/&limit=5000" },
                // { test: /\.ttf(\?v=\d+.\d+.\d+)?$/, loader: "url?name=assets/[name].[ext]&limit=10000&mimetype=application/octet-stream" },
                // { test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: "url?name=assets/[name].[ext]&limit=10000&mimetype=image/svg+xml" }            
            ],
            noParse: []
        },
        plugins: [
            new ExtractTextPlugin("[name].css"),
            new HtmlWebpackPlugin({
                template: appConfig.bundle.html,
                inject: "body",
                hash: true
            }),
            
            // , new webpack.ProvidePlugin({
            //     "$": "jquery",
            //     "jQuery": "jquery",
            //     "_": "lodash"
            // })
        ]
    };
    
    // if ( _.isObject(appConfig.bundle.vendor)) {
    //     webpackConfig.entry["vendor"] = [];
    //     _.each(appConfig.bundle.vendor, function(path, name) {
    //         webpackConfig.entry.vendor.push(name);
    //         webpackConfig.resolve.alias[name] = path;
    //         webpackConfig.module.noParse.push(new RegExp('^' + name + '$'));
    //     });
    //     
    //     var plugin = new webpack.optimize.CommonsChunkPlugin("vendor", "js/vendor.js", Infinity);
    //     webpackConfig.plugins.push(plugin);
    // }
    
    var browserSync = new BrowserSyncPlugin(appConfig.browserSync);
    webpackConfig.plugins.push(browserSync);
    
    if (appConfig.isProd){
        webpackConfig.devtool = '#source-map';
        webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({ sourceMap: false }));
    }
    else {
        webpackConfig.devtool = '#eval';
    }
    
    return webpackConfig;
}