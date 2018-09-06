const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    resolve(__dirname, "src") + "/index.jsx"
  ],

  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: '#source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["es2015", {"modules": false}],
            "react"
          ],
          plugins: [
            "react-hot-loader/babel"
          ]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
            test: /\.(jpg|png|gif|svg|pdf)$/,
            use: [
                {
                  // loader: 'file?name=src/img/favicon.ico'
                    loader: 'file-loader',
                    options: {
                        name: '[path][name]-[hash:8].[ext]'
                    },
                },
            ]
        },
        {
              test: /\.(ico)$/,
              use: [
                  {
                    // loader: 'file?name=src/img/favicon.ico'
                      loader: 'file-loader',
                      options: {
                          name: 'file?name=[name].[ext]'
                      },
                  },
              ]
          }
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
     favicon: 'src/img/favicon.ico',
     template:'template.ejs',
     appMountId: 'react-app-root',
     title: "Crazy Rich Asians Bio",
     filename: resolve(__dirname, "build", "index.html"),
   }),
  ]
};
