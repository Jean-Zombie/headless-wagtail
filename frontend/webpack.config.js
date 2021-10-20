const { VuetifyLoaderPlugin } = require("vuetify-loader");
const webpack = require("webpack");
const BundleTracker = require("webpack-bundle-tracker");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");
const DEST_FOLDER = "dist";
const Dotenv = require("dotenv-webpack");

module.exports = env => {
  console.log(`Public path: ${env.public_path}`)
  return {
    entry: {
      app: "./src/main.js"
    },
    output: {
      path: path.join(__dirname, DEST_FOLDER),
      publicPath: `${env.public_path}`,
      filename: `${env.file_name}`,
    },
    plugins: [
      new BundleTracker({ filename: "./webpack-stats.json" }),
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      new VuetifyLoaderPlugin({ progressiveImages: true }),
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            chunks: "initial",
            name: "vendor"
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader"
          ]
        },
        { test: /\.vue$/, use: "vue-loader" },
        { test: /.*\.(png|jpe?g)$/i, use: "file-loader" }
      ]
    },
    devServer: {
      port: 3000,
      hot: true
      // watchOptions: { ignored: /node_modules/ }
    }
  };
};
