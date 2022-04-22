const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './app.js', // 入口文件
    output: {
      path: path.resolve(__dirname, 'dist'), // 定义输出目录
      filename: 'my-first-webpack.bundle.js'  // 定义输出文件名称
    },
    mode:'development',
    devServer: {
      hot: true, // 热加载
      // contentBase: path.join(__dirname, 'dist'), // server文件的根目录
      compress: true, // 开启gzip
      port: 8080, //端口
    },
    // 别名路径配置
    resolve: {
        extensions: ['*','.js', '.jsx', '.json'],
        alias: {
          '@': path.join(__dirname, './src')
        }
    },
    module: {
      rules: [
        {
          test: /\.js$/, // 匹配.js文件
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(), // HMR允许在运行时更新各种模块，而无需进行完全刷新
      new HtmlWebPackPlugin({
        template: './index.html',
        filename: path.resolve(__dirname, 'dist/index.html')
      })
    ]
};