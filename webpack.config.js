const ReactRefreshBabel = require("react-refresh/babel");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    libraryTarget: "system",
  },
  externals: ["react", "react-dom"],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [ReactRefreshBabel],
            },
          },
        ],
      },
    ],
  },
  plugins: [new ReactRefreshPlugin()],
  devServer: {
    port: 8081,
    hot: true,
    open: true,
  },
};
