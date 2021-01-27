const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    libraryTarget: "system",
    publicPath: "",
    uniqueName: "app",
  },
  externals: ["react", "react-dom", "app2", /^react-refresh.*/],
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
    static: [
      // fixes a bug in webpack-dev-server 4.0.0-beta0 in which it's watching these directories that it shouldn't be
      // see https://github.com/webpack/webpack-dev-server/issues/2936#issuecomment-763960079
      { directory: path.join(process.cwd(), "public") },
      { directory: path.join(process.cwd(), "node_modules"), watch: false },
      { directory: path.join(process.cwd(), ".git"), watch: false },
      { directory: path.join(process.cwd(), "app2"), watch: false },
    ],
  },
};
