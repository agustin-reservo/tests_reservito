const Path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/app.js'),
  },
  output: {
    path: Path.join(__dirname, '../../static/webpack_bundles/'),
    // filename: '[name].js',
    publicPath: 'http://localhost:8080/',
  },
  devServer: {
    watchFiles: {
      paths: ['../src/*'],
    },
    hot: true,
    headers: {'Access-Control-Allow-Origin': '*'},
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      'Static': Path.resolve(__dirname, '../../static'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[id].css',
    }),
    new VueLoaderPlugin(),
    new BundleTracker({
      filename: './webpack-stats.json'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },
      {
        exclude: /node_modules/,
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        exclude: /node_modules/,
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader" ,
          },
        ],
      },
      {

      }
    ]
  }
}
