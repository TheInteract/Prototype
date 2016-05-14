const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')

module.exports = {
	devtool: 'eval',
	entry: './src/client/main.js',
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
					{
						loader: 'css-loader',
						query: {
							sourceMap: true,
							module: true,
							localIdentName: '[local]___[hash:base64:5]'
						}
					}
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
							sourceMap: true,
							module: true,
							localIdentName: '[local]___[hash:base64:5]'
						}
					},
					{
						loader: 'sass-loader',
						query: {
							outputStyle: 'expanded',
							sourceMap: true
						}
					},
					'postcss-loader'
				]
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			}
		]
	},
	postcss: function () {
		return [autoprefixer]
	},
	plugins: [
    	new webpack.ProvidePlugin({
      		'jQuery': 'jquery'
    	})
  	]
}