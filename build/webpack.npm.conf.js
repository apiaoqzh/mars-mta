/**
 * 发布到npm前的打包
 */
const merge = require('webpack-merge')
const config = require('../config')
const baseConfig = require('./webpack.base.conf')

const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: './src/index.js',
  output: {
    publicPath: '',
    path: config.build.assetsRoot,
    filename: 'mars-mta.min.js',
    library: 'mars-mta', // 指定的就是你使用require时的模块名
    libraryTarget: 'umd', // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
    umdNamedDefine: true, // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  },
  // devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(scss|css)$/,
      use: [
        {
          loader: 'vue-style-loader', // 将 JS 字符串生成为 style 节点
          options: {
            sourceMap: true
          }
        }, {
          loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
          options: {
            sourceMap: false
          }
        },
        {
          loader: 'postcss-loader', // postcss
          options: {
            sourceMap: false
          }
        }, {
          loader: 'sass-loader', // 将 Sass 编译成 CSS
          options: {
            sourceMap: false
          }
        }
      ]
    }]
  },
  optimization: {
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})
