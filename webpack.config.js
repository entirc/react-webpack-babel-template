const path = require('path')

module.exports = {
  entry: [
    path.resolve(__dirname, 'src', 'index.js'),
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        query: {
          presets: [
            "react",
            "es2015"
          ]
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  }
}
