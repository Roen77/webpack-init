// webpack.dev.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
// const StylelintPlugin = require("stylelint-webpack-plugin");

const config = {
  mode: "development",
  devServer: {
    open: false,
    // overlay: true, //에러발생시, 오버레이화면으로 에러메세지를 보여준다.
    //  해당 옵션을 true로 설정하면 기존주소에서 /hello 같은 매개변수를 추가하더라도 루트 디렉토리로 이동할 수 있다. 라우팅 제공 그래서 spa 에서 많이 쓰인다.
    // historyApiFallback: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/subpage/, to: "/src/subpage.html" },
        { from: /./, to: "/src/404.html" },
      ],
    },
    port: 8080,
  },
  // plugins: [new StylelintPlugin()],
};
module.exports = merge(common, config);
