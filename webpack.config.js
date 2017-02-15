var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env) {
	return {
		entry: {
			main: './src/index.js',
			common: ['jquery', 'angular', 'bootstrap']
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			publicPath: 'dist/',
			filename: '[name].js'
		},
		module: {
			loaders: [
				{test: /\.css$/, loader: 'style-loader!css-loader'},
				{test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      			{test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
			]
		},
		plugins: [
			new webpack.optimize.CommonsChunkPlugin({
        		names: ['main', 'common']
        	}),
        	new webpack.ProvidePlugin({   
		        jQuery: 'jquery',
		        $: 'jquery',
		        jquery: 'jquery'
		    }),
		    new ExtractTextPlugin('css/site.css')
		]
	};
}