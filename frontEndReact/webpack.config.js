module.exports={
	entry:[
	'./index.js'
	],
	module:{
		loaders:[
		{ test: /(\.js|\.jsx)$/, exclude: /node_modules/, loader: "babel-loader", query: { presets: ['es2015', 'react'] }}
		]
	},
	output: {
		filename: "index_bundle.js",
    	path: __dirname + '/dist'
	}
}