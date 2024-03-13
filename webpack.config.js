const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDevelopment ? 'bundle.js' : 'bundle.[contenthash].js',
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        inject: true,
        favicon: "./public/favicon.ico",
        manifest: "./public/manifest.json",
      }),
      isDevelopment ? undefined : new CleanWebpackPlugin(),
    ].filter(Boolean),
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      hot: true,
    },
  };
};
