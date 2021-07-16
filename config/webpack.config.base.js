const ForceCheckType = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');

const { resolve } = require('./utils');

const outPathPrefix = 'static';

const base = (env) => ({
  entry: resolve('src/index.tsx'),
  output: {
    filename: outPathPrefix + '/js/[name].[contenthash:8].js',
    chunkFilename: outPathPrefix + '/js/[id].[contenthash:8].js',
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
          // {
          //   loader: 'thread-loader',
          // },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          }
        ],
      },
      {
        test: /\.(css|less)$/,
        include: [resolve('src')],
        use: [
          env === 'production' ? ({
            loader: MiniCssExtract.loader,
            options: {
              publicPath: resolve('build'),
            }
          }) : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              sourceMap: false,
            }
          }
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
              name: outPathPrefix + '/assets/[name].[ext]',
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
      filename: outPathPrefix + "/css/[name].[contenthash:8].css",
      chunkFilename: outPathPrefix + "/css/[id].[contenthash:8].css",
    }),
  ].filter(Boolean)
});

module.exports = base;
