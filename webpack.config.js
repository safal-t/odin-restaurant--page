const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Starting point of your app
  output: {
    filename: 'bundle.js', // Bundled JS filename
    path: path.resolve(__dirname, 'dist'), // Absolute path to dist
    assetModuleFilename: 'assets/[hash][ext][query]' // for images if needed
  },
  module: {
    rules: [
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource',
        }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // Clears dist/ before each build
    new HtmlWebpackPlugin({
      template: './src/template.html', // Use your HTML template
      filename: 'index.html' // Output filename in dist/
    })
  ],
  devServer: {
    static: './dist', // Serve files from dist/
  },
  mode: 'development', // 'production' will minify and optimize
};

