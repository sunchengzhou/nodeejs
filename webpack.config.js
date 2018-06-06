var path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: "eval-source-map",
    entry: path.resolve(__dirname + "/static/page/Index/index.js"),
    output: {
        path: path.resolve(__dirname + "/www"),
        filename: "[name]-[hash].js"
    },
    resolve: {
        alias: {
            page: path.resolve(__dirname, 'static/page')
        }
    },
    watch: true,
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 500, 
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/views/index.ejs"
        }),
        new CleanWebpackPlugin(
            ['www/*'],　 //匹配删除的文件
            {
                root: __dirname,       　　　　　　　　　　//根目录
                verbose: true,        　　　　　　　　　　//开启在控制台输出信息
                dry: false        　　　　　　　　　　//启用删除文件
            }
        )
    ]
}