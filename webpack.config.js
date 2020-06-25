const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./modules/index.js",
  },
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "static/dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "static/templates/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "url-loader?name=app/images/[name].[ext]",
      },
    ],
  },
  resolve: {
    alias: {
      modules: path.resolve(__dirname, "modules"),
      images: path.resolve(__dirname, "static/img"),
    },
  },
};
