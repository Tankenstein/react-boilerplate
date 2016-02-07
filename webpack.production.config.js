var join = require('path').join;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [join(__dirname, 'entry.js')],
  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
    new HtmlWebpackPlugin({ template: join(__dirname, 'src/index.ejs') }),
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') },
    ],
  },
};
