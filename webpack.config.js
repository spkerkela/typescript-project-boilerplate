const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const outputDirName = path.resolve(__dirname, "docs");
module.exports = {
  mode: "production",
  entry: "./src/index",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: outputDirName,
    filename: "[name].js",
  },
  target: "web",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Fighting Boxes",
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: outputDirName,
    },
    compress: true,
    port: 3000,
  },
};
