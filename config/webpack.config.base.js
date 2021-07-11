const forceCheckType = require('fork-ts-checker-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

const { resolve } = require('./utils');

const base = {
  entry: resolve('./src/index.tsx'),
  output: {
    filename: '[name].[contenthash].js',
    path: resolve('build'),
  },
  resolve: {
    alias: {
      '@/*': resolve('src/*'),
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
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            }
          }
        ],
      },
      {
        test: /\.(css|less)$/,
        include: [resolve('src')],
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      }
    ],
  },
  plugins: [
    new forceCheckType(),
    new htmlWebpackPlugin({
      template: resolve('public/index.html'),
    }),
  ]
};

module.exports = base;
