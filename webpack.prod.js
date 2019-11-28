const common = require("./webpack.config")
const merge = require("webpack-merge")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const cleanOptions = {  
  verbose: true, 
  dry: true,
}

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(cleanOptions),
    new MiniCssExtractPlugin({ filename: "[name].css" })
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader", 
          "sass-loader"
        ]
      },
    ]
  },
})