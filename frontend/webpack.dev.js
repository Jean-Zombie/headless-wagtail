const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");

module.exports = merge(common, {
  mode: "development",
  output: { publicPath: "http://localhost:3000/static/dist/" },
  devServer: {
    port: 3000,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      // "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
    // watchOptions: { ignored: /node_modules/ }
  }
});
