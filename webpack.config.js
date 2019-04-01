const path = require('path');

const mylocalIdentName = '[name]__[local]___[hash:base64:5]';

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader', // inject CSS to page
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS modules
            options: {
              modules: true,
              localIdentName: mylocalIdentName,
            },
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader', // inject CSS to page
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS modules
            options: {
              modules: true,
              localIdentName: mylocalIdentName,
            },
          },
        ],
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  devtool: 'source-map',
};
