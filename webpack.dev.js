const common = require("./webpack.config")
const merge = require("webpack-merge")

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
    ]
  },
  devServer: {
    port: 3000,
    contentBase: "./src",
    historyApiFallback: true
  }
})