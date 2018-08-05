var WebpackAutoInject = require('webpack-auto-inject-version');
var path = require('path');

module.exports = {
  mode: 'development',
  entry:  './src/index.js',
  output: {
    library: 'Power',
    libraryTarget: "umd",
    filename: 'power-dev.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ],
  },
  plugins: [
    new WebpackAutoInject({
      components: {
        AutoIncreaseVersion: false
      }
    })
  ]
};
