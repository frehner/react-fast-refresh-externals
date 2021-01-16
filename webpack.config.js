const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    libraryTarget: "system",
    publicPath: "",
  },
  externals: ["react", "react-dom"],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
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
