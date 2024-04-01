const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: './src/index.tsx',
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
      filename: isDevelopment ? 'bundle.js' : 'bundle.[contenthash].js',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
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
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        filename: 'index.html',
        base: '/',
      }),  
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      hot: true,
      historyApiFallback: true
    },
  };
};
