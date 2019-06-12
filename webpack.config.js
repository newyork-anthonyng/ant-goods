const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),

  output: {
    path: path.resolve(__dirname),
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },

  plugins: [
    new HtmlPlugin()
  ]
};
