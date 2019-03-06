var path = require('path');
//plugin 需要单独引插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Uglifyjs = require('uglifyjs-webpack-plugin');
var  MiniCss = require('mini-css-extract-plugin');
module.exports = {
    //入口文件
    // entry:'./src/index.js',
    entry:{//多入口文件写法
        main:'./src/index.js'
    },
    //出口文件
    output:{
        filename:'[name].js',//根据入口文件的名字自动生成输出文件名
        path:path.resolve(__dirname,'dist')
    },
    //开发模式-生产环境->production
    mode:'development',
    //服务器开启的默认路径,端口号
    devServer:{
        contentBase:'dist',
        port:9999
    },
    // 应用 loader
    module:{
        rules:[
            //css loader
            {
                test:/\.css$/,//匹配css文件
                //require用法：
                // use:['style-loader','css-loader']//加载相应插件（从后往前加载）
                // plugin用法：
                use:[MiniCss.loader,'css-loader']
            },
            //html loader
            // {
            //     test:/\.html$/,
            //     use:[
            //         // 3.单独抽离的html进行配置
            //         {
            //             loader:'file-loader',
            //             options:{
            //                 name:'index.html'
            //             }
            //         },
            //         //2.单独抽离html->这样打包之后html就会以一个单独的文件在dist中存在。而不是都在出口文件中
            //         {
            //             loader:'extract-loader'
            //         },
            //         //1.找到html文件
            //         {
            //             loader:'html-loader'
            //         }
            //     ]
            // },
            // img loader
            {
                test:/\.(png|jpg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{//图片默认是以base64格式加载的
                            limit:8192,//限制大小
                            //[contenthash:8]给文件加一个根据文件内容生成的hash值（文件ID）
                            name:"img/[name].[hash:8][ext]"//然后解析成正常的图片格式，以一个单独的文件在dist中存在
                        }
                    }
                ]
            }
        ]
    },
    //应用 plugin
    plugins:[
        // 单独抽离出html文件
        new HtmlWebpackPlugin({
            title:'abc',//定义打包后html的标题
            template:'./src/index.html',//指定抽离的html文件
            // 压缩输出的html
            minify:{
                collapseWhitespace:true
            }
        }),
        new Uglifyjs(),
        //单独抽离出css文件
        new MiniCss({
            filename:'[name]_[contenthash:8].css'//定义输出的名字
        })
    ]
    
}