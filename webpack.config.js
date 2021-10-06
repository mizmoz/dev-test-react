
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: [
    // activate HMR for React
    'react-hot-loader/patch',
    'whatwg-fetch',
    './src/index.jsx',
  ],

  module: {
    rules: [
      {
        test: /\.js[x]{0,1}$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  optimization: {
    namedModules: true,
    noEmitOnErrors: true,
  },

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'scripts/[id]-[hash].js',
    chunkFilename: 'scripts/[id]-[hash].js',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      features: path.resolve(__dirname, './src/features/'),
      components: path.resolve(__dirname, './src/components/'),
      configs: path.resolve(__dirname, './src/configs/'),
    },
  },
};
