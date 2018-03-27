const entry = require('./webpack_config/entry_webpack');
const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin= require('html-webpack-plugin');
const extractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const PurifyCSSPlugin = require("purifycss-webpack");
const webpack = require('webpack');

//这里的build是服务启动时package.json中scripts对象传递进来的
if(process.env.type== "build"){
    var website={
        publicPath:"http://localhsot:9999/"
    }
}else{
    var website={
        publicPath:"http://localhost:1717/"
    }
}
module.exports={
    devtool: 'eval-source-map',
    //入口文件的配置项（采用模块化配置）
    entry:entry.path,
    //出口文件的配置项
    output:{
        //打包的路径位置
        path:path.resolve(__dirname,'dist'),
        //打包的文件名称
        filename:'[name].js',
        //解决CSS文件分离后路径不对的问题
        publicPath:website.publicPath
    },
    //模块：例如解读CSS,图片如何转换，压缩
    module:{
        rules: [
            //CSS文件打包模块
            {
                test: /\.css$/,
                //由于css分离，故启用下面的配置
                use: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            //less文件打包
            {
            test: /\.less$/,
            use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            //图片打包模块
            {
                test:/\.(png|jpg|gif)/ ,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:5000,
                        outputPath:'images/'    //将图片分离到dist/images下
                    }
                }]
            },
            //html中直接引入的图片进行打包
            {
                test: /\.(htm|html)$/i,
                use:[ 'html-withimg-loader']
            }
        ]
    },
    //插件，用于生产模版和各项功能
    plugins:[
        new uglify(),    //js压缩

        //打包HTML文件插件，直接用npm start进行thml的打包
        new htmlPlugin({
            //minify：是对html文件进行压缩，removeAttrubuteQuotes是去掉属性的双引号
            minify:{
                removeAttributeQuotes:true,
                //删除html的注释
                removeComments:true,
                //删除空格
                collapseWhitespace:true
            },
            hash:true,  //所以加入hash，这样可以有效避免缓存JS
            template:'./src/index.html' //需要打包的html模版路径和文件名称
        }),
        
        //css分离，这里的css/[name].css是分离后的路径位置，在dist/css/下
        new extractTextPlugin("/css/[name].css"),

        //去除多余css
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        }),
        
        //全局引入第三方类库
        new webpack.ProvidePlugin({
            //$:"jquery"
        })
        
    ],
    //配置webpack开发服务功能
    devServer:{
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'./dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host:'localhost',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口号
        port:1717
    }
}