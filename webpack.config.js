const webpack = require('webpack')
const path = require('path')

module.exports = {
	devtool: 'eval',
	entry: './main.js',
	output: {
		publicPath: '/public/',
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	devServer: {
		hot: true,
		inline: true,
		port: 3000
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	}
}