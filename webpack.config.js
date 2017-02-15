var path = require('path');
var webpack = require('webpack');

module.exports = function(env) {
	return {
		entry: {
			main: './src/index.js',
			common: ['jquery', 'angular', 'bootstrap', 'angular-route']
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			publicPath: 'dist/',
			filename: '[name].js'
		},
		module: {
			loaders: [
				{test: /\.css$/, loader: 'style-loader!css-loader'},
				{test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff&name=fonts/[name].[ext]" },
      	{test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=fonts/[name].[ext]" }
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
		    })
		]
	};
}