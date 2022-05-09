// __dirname 과 path 내장모듈로 경로를 만든다.
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  mode: "development",
  // main이 되는 파일 경로
  entry: "./src/index.js",
  // 파일이 생성되는 경로이고, 절대경로로 설정해주어야한다. __dirname으로 파일 경로 생성
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
  },
  // 웹팩이 인식할수있도록 환경이 무엇인지 target으로 설정(참고로 target을 지정해주지않으면 brower를 의미하는 web으로 지정된다.)
  target: ["web", "es5"],
  //   loader 설정 style-loader가 css-loader보다 먼저 와야한다.
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          //   {
          //     loader: "style-loader",
          //     // 참고로 injectType은 스타일이 DOM에 주입되는 방식을 설정할수 있고, singletonStyleTag로 설정하게 되면 말그대로 style태그를 1개만 써서 합쳐지게 된다.
          //     options: {
          //       injectType: "singletonStyleTag",
          //     },
          //   },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
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
      minify: {
        collapseWhitespace: true,
        useShortDoctype: true,
        removeScriptTypeAttributes: true,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[contenthash].css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
    runtimeChunk: {
      name: "runtime",
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "venders",
          chunks: "all",
        },
      },
    },
  },
};

// Loader
// module.exports ={
//     module:{
//         rules:[loader1,loader2..]
//     }
// }

// Plugin
// module.export = {
//     plugins:[new Plugin({...options}),...]
// }

// hash는 파일이 변경되었을 때, 빌드가 될때마다 부여된다.
// filename: "[name].[hash].js" => 이러한 방식으로 hash를 부여할 수 있다.

// 자바스크립트 파일만 수정되고 css파일이 수정되지 않았어도 [hash].css로 설정을 한다면, 빌드할때
// css 파일도 새로운 해시값을 가진 css파일이 만들어진다. 변경되지 않는 리소스는 cashing를 해주어야하는데
// 이러한 방식으로는 제대로 cashing이 이루어지지 않는다.
// 이를 해결하기 위해 [contenthash].css 로 설정해준다.
// contenthash 는 content에 따라 hash값을 부여해준다.(contenthash를 쓰면 자바스크립트 파일이 수정되어도 css파일이 수정되지 않는다면 cashing을 할 수 있다.)

// 참고로 계속 빌드를 하면 새로생성된 해시값이 적용된 번들 파일이 쌓이게 된다.
// 이를 해결하기 위해 불필요한 파일을 삭제해주는 clean-webpack-plugin 를 사용해보자.
