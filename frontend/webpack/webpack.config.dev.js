const Path = require('path');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/app.js'),
  },
  output: {
    path: Path.join(__dirname, '../../static/webpack_bundles/'),
    filename: '[name].js',
    publicPath: 'http://localhost:8080',
  },
  devServer: {
    watchOptions: {
      aggregateTimeout: 5000,
      poll: 5000,
      ignored: /node_modules/
    },
    hot: true,
    quiet: false,
    headers: {'Access-Control-Allow-Origin': '*'},
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      'Static': Path.resolve(__dirname, '../../static'),
    },
  },
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

    ]
  }
}
