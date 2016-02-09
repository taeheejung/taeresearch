var path = require('path');
var webpackConfig = require('./webpack.core')({Dev: false});

module.exports = function(config) {
    config.set ({
        basePath: __dirname,
        frameworks: ["jasmine"],
        files: [
          'src/pimco.pacQueue.login/pageLogin/spec/*.spec.ts' 
        ],
        preprocessors: {
            // add webpack as preprocessor
            'src/pimco.pacQueue.login/pageLogin/spec/*.spec.ts': ['webpack']
            // ,'src/**/*.spec.ts': ['webpack']
        },
        browsers: ["Chrome"],
        singleRun: false,
        plugins: [
          require('karma-jasmine'),
          require('karma-chrome-launcher'),
          require('karma-webpack')
        ],        
        webpack :{
            module: {
                loaders: webpackConfig.module.loaders
            },
            resolve: webpackConfig.resolve,
            plugins: webpackConfig.plugins
        }
    });
};