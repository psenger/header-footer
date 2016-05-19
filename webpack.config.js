var path = require('path');

module.exports = {
	// context: path.resolve('lib'),
	entry: [ "./index" ],
	output: {
		path: path.resolve('dist'),
		filename: "bundle.js"
	},

	module: {
		loaders: [
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
}