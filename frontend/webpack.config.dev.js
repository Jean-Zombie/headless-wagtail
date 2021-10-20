const { VuetifyLoaderPlugin } = require("vuetify-loader");
const webpack = require("webpack");
const BundleTracker = require("webpack-bundle-tracker");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const Dotenv = require("dotenv-webpack");

module.exports = env => {
  return {
    entry: {
      app: "./src/main.js"
    },
    output: {
      publicPath: "http://localhost:3000/static/dist/",
    },
    plugins: [
      new BundleTracker({ filename: "./webpack-stats.json" }),
      new VueLoaderPlugin(),
      new VuetifyLoaderPlugin({ progressiveImages: true }),
      new Dotenv({
        path: `./.env.${env.enviroment}`
      })
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
