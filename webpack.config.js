const webpack = require('webpack')
const path = require('path')

module.exports = {
	devtool: 'eval',
	entry: './app/client/main.js',
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
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loaders: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				exlude: /node_modules/,
				loaders: [
					'style-loader',
					{
						loader: 'css-loader',
						query: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						query: {
							outputStyle: 'expanded',
							sourceMap: true
						}
					}
				]
			},
			'postcss-loader'
		]
	},
	postcss: function () {
		return [autoprefixer]
	}
}