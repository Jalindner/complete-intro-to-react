const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      }
    ],
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
