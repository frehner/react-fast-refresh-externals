const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./app2/other.js",
  output: {
    uniqueName: "app2",
    libraryTarget: "system",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/",
    devtoolNamespace: "app2",
  },
  externals: ["react", "react-dom", "app"],
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
    port: 8082,
    hot: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    static: [
      // fixes a bug in webpack-dev-server 4.0.0-beta0 in which it's watching these directories that it shouldn't be
      // see https://github.com/webpack/webpack-dev-server/issues/2936#issuecomment-763960079
      { directory: path.join(process.cwd(), "node_modules"), watch: false },
      { directory: path.join(process.cwd(), ".git"), watch: false },
    ],
  },
};
