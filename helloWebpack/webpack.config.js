var path = require("path");
var webpack = require('webpack');

module.exports = {
	entry: "./src/app.js",
	output: {
		filename: "./src/bundle.js"
	},

  // devtool: "source-map",
  watch: true,
  resolve: {
    moduleDirectories: ["node_modules", "bower_components", "web_modules"],
    extensions: ["", '.webpack.js', '.web.js', ".js", "jsx", ".ts", ".tsx"]
  },

	module: {
		loaders: [
			{
				test: /\.css$/, loader: "style-loader!css-loader",
				exclude:/node_module/
			},
			{
				test: /\.tsx?$/, loader: "ts-loader"
			},
		]
	}
}