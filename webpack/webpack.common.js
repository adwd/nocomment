const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const srcDir = '../src/';

module.exports = {
  entry: {
    popup: path.join(__dirname, srcDir + 'popup.tsx'),
    options: path.join(__dirname, srcDir + 'options.ts'),
    background: path.join(__dirname, srcDir + 'background.ts'),
    content_script: path.join(__dirname, srcDir + 'content_script.ts'),
  },
  output: {
    path: path.join(__dirname, '../dist/js'),
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [new CopyPlugin([{ from: '.', to: '../' }], { context: 'public' })],
};
