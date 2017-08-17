const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var helpers = require("./helpers");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
  entry: {
    app: './src/main.ts',
    vendor: './src/vendor.ts',
    polyfills: "./src/polyfills.ts"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.[hash].js",
    chunkFilename: "[id].chunk.[hash].js"
  },
  resolve: {
    extensions: [
      ".js", ".ts"
    ]
  },

  devtool: "source-map", // any "source-map"-like devtool is possible
  module: {
    rules: [
      // Extract css files
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-raw-loader", options: {
              sourceMap: true
            }
          }, {
            loader: "sass-loader", options: {
              sourceMap: true
            }
          }],
          // use style-loader in development
          fallback: "style-loader"
        }),

      }, {
        test: /\.ts$/,
        use: ["ts-loader?configFileName=./tsconfig.json", "angular2-template-loader", "awesome-typescript-loader"]
      },
      {
        test: /\.html$/,
        use: "html-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].[hash].css"),
     new webpack.optimize.CommonsChunkPlugin({
            name: [ "app", "vendor", "polyfills" ]
        }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('src'), // location of your src
      {
        // your Angular Async Route paths relative to this root directory
      }
    ),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        // browse to http://localhost:3000/ during development
        host: 'localhost',
        port: 3000,
        // proxy the Webpack Dev Server endpoint
        // (which should be serving on http://localhost:3100/)
        // through BrowserSync
        proxy: 'http://localhost:8080/',
     
        tunnel: 'dave'
        
      },
      // plugin options
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false
      }
    )
  ],
  devServer: {
    historyApiFallback: true
    // TODO setup when REST service ready
        // proxy: {
        //     "/api/**": {
        //         target: "http://localhost:8080/nurdbot-rest-service",
        //         secure: false,
        //         changeOrigin: true
        //     }
        // }*/
  }

};