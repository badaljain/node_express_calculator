module.exports = {
  	entry: './src/index.js',
  	output: {
    	path: __dirname + "/public",
    	filename: 'bundle.js'       
  	},
  	module: {
		loaders: [
      		{
        		test: /\.js$/,
        		exclude: /node_modules/,
        		loader: 'babel-loader'
      		},
      		{
		  		test: /\.css$/,
		  		loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
			}
		]
  	},
	resolve: {
    	extensions: ['.js', '.json'] 
  	}
};