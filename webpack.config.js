const webpack = require('webpack')
const dotenv = require('dotenv')

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    './client/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devServer: {
    static: "./public",
    hot: true
},
plugins: [
  new webpack.DefinePlugin({
     'process.env': JSON.stringify(dotenv.config().parsed)
  })
],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    //   {
    //     test: /\.(jpe?g|png|gif|svg)$/i,
    //     loader: 'file-loader',
    //     options: {
    //       name: 'public/[name].[ext]'
    //     }
    // }
    //
    ]
  }
}
