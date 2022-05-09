// __dirname 과 path 내장모듈로 경로를 만든다.
// webpack.common.js 공통적으로 사용되는 내용을 적어준다.
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
// const postcssLoder = {
//   loader: "postcss-loader",
//   options: {
//     config: {
//       path: "postcss.config.js",
//     },
//   },
// };
// npm i stylelint stylelint-scss stylelint-webpack-plugin stylelint-config-standard

const isProduction = process.env.NODE_ENV === "PRODUCTION";
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
  },
  target: ["web", "es5"],
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        // 여러 rules중 하나의 룰을 정할수있다.
        oneOf: [
          {
            // 파일명에 module이 들어가면 모듈화할수 있도록 구분
            test: /\.module\.s?css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              {
                loader: "css-loader",
                options: {
                  modules: true,
                },
              },
              // postcssLoder,
              "sass-loader",
            ],
          },
          {
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              "css-loader",
              // postcssLoder,
              "sass-loader",
            ],
          },
        ],
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
      {
        //   i는 대소문자를 구별하지 않는다는뜻이다 $는끝맺음
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name() {
                if (!isProduction) {
                  return "[path][name].[ext]";
                }
                return "[contenthash].[ext]";
              },
              publicPath: "assets/",
              // 위에서정한 output의 경로안에 폴더를 추가할 수 있다.
              outputPath: "assets/",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // 파일크기이고 byte단위로적으면됨
              limit: 8192,
            },
          },
        ],
      },
      {
        // js파일은 babel-loader 적용
        test: /.js/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack",
      template: "./src/template.hbs",
      meta: {
        viewport: "width=device-width, initial-scale=1.0",
      },
      minify: isProduction
        ? {
            collapseWhitespace: true,
            useShortDoctype: true,
            removeScriptTypeAttributes: true,
          }
        : false,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[contenthash].css",
    }),
    new webpack.DefinePlugin({
      IS_PRODUCTION: isProduction,
    }),
  ],
};

// 참고로 postccssLoader 사용시 prefixer 접두사를 추가할 때 브라우저의 범위를 지정해야
// webkit 이외의 접수사도 추가할 수 있다.
// const postcssLoder = {
//   loader: "postcss-loader",
//   options: {
//     config: {
//       path: "postcss.config.js",
//     },
//   },
// };
// module.exports = {
//   ....
//   module: {
//     rules: [
//       {
//         // js파일은 babel-loader 적용
//         teset: /.js/,
//         exclude: /node_modules/,
//         loader: "babel-loader",
//       },
//     ],
//   },
// };
