const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,  // Ensure Webpack processes .js and .jsx files
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            },
          },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader","postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    hot: true,
    port: 3000,
    historyApiFallback: true,
      
  },
  mode: "development",
};

