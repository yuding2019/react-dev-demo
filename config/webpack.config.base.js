const ForceCheckType = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');

const { resolve } = require('./utils');

const base = (env) => ({
  entry: resolve('src/index.tsx'),
  output: {
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].js',
    path: resolve('build'),
    clean: true,
  },
  devtool: false,
  resolve: {
    alias: {
      '@': resolve('src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: [resolve('src')],
        use: [
          {
            loader: 'thread-loader',
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          }
        ],
      },
      {
        test: /\.(css|less)$/,
        include: [resolve('src')],
        use: [
          env === 'development' ? 'style-loader' : ({
            loader: MiniCssExtract.loader,
            options: {
              publicPath: resolve('build'),
            }
          }),
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        include: [resolve('src')],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new ForceCheckType(),
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
      inject: 'body',
    }),
    env === 'production' && new MiniCssExtract({
      filename: "static/css/[name].[contenthash:8].css",
      chunkFilename: "static/css/[id].[contenthash:8].css",
    }),
  ].filter(Boolean)
});

module.exports = base;
