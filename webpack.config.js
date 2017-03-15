var CopyWebpackPlugin = require('copy-webpack-plugin');
var ClosureCompilerPlugin = require('webpack-closure-compiler');
module.exports = {
  context: __dirname + '/app',
  entry: {
    javascript: './scripts/app.js',
  },
  output: {
    filename: 'app.bundle.js',
    path: __dirname + '/dist',
  },
  externals: {
    jquery: 'jQuery',
  },
   plugins: [
    new CopyWebpackPlugin([
    {
      from:'./templates/images',
      to: __dirname + '/dist/images',
    },
    {
      from:'./scripts/libs/',
      to: __dirname + '/dist/libs',
    },
    {
      from:'./index.html',
      to: __dirname + '/dist/index.html',
    }
      ])
    ],
  module: {
    loaders: [{
      test: /\.less|css$/,
      use: [
        'style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        'less-loader',
      ],
    }, { 
      test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, 
      loader: "file" 
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader','eslint-loader'],
    }, {
      test: /\.hbs$/,
      loader: 'handlebars-loader',
      query: {
        partialDirs: [
          __dirname + '/templates/partials',
        ],
      },
    }],
  },
};