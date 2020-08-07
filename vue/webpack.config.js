// 引入path
const path = require('path');
// 引入html-webpack-plugin插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// vue-loader-plugin插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 引入clean-webpack-plugin用来清除dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  // 入口
  entry: {
    index: './src/index.js'
  },
  // 出口
  output: {
    filename: "[name].js",
    path: path.join(__dirname, './dist'),
  },
  // 设置环境
  mode: 'development',
  // source map映射
  devtool: 'inline-source-map',
  // 配置devserver
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: 'Google Chrome'
  },
  // 配置loder
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: { // 
          loader: 'url-loader',
          options: {
            esModule: false,
            // name: '[name].[ext]',
            // outputPath: 'image/',
            limit: 200 * 1024 // 小于200k，会转化成base64
          }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ]
}