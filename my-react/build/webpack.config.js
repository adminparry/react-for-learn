var path = require('path');

var ppath = p => path.resolve(__dirname,'../',p)
module.exports = {
	mode:'development',
	watch:true,
	entry:ppath('src/main.js'),
	output:{
		path:ppath('dist'),
		filename:'[name]-dist.[ext]'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				use:[
					{	loader:'bable-loader',
						options:{
							presets:['es2015','react']
						}
					},

				]
			},
			{
				test:/\.(css|scss|less)$/,
				use:[
					'style-loader',
					'css-loader'
				]
			}
		]
	},
	devServer:{
	   contentBase: './dist',//默认本地服务器在跟目录  
       historyApiFallback: true,//不跳转，默认会跳转且都跳到index.html上  
       inline: true,//源文件改变时刷新页面  
       port:8085//更改端口号，默认8080  
	}
}