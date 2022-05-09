// // const { getCircleArea } = require("./mathUtil");
// // import { getCircleArea } from "./mathUtil";

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const { getCircleArea, getRecArea } = require("./mathUtil");
// // rl.question("원하는 도형을 입력해주세요:", (input) => {
// //   console.log(input);
// //   rl.close();
// // });

// rl.question("넓이구하기:", (figure) => {
//   console.log(`선택한 도형 ${figure}`);
//   switch (figure) {
//     case "정사각형":
//       rl.question("변의 길이 입력:", (input) => {
//         console.log("입력한 값:", input);
//         console.log("입력한 넓이:", getRecArea(input));
//         rl.close();
//       });
//     case "원":
//       rl.question("원의 길이 입력:", (input) => {
//         console.log("입력한 값:", input);
//         console.log("입력한 넓이:", getCircleArea(input));
//         rl.close();
//       });
//     default:
//       console.log("입력한 도형은 없다.");
//       rl.close();
//   }
// });

// node -r esm index.js로 실행

// index.js 모듈화하지 않았을 경우에는 그냥 import만 하면 된다.
import "normalize.css";
// import "./index.css";
import $ from "jquery";

// babel polyfill은 js파일에 불러와야한다.
// index.js
import "@babel/polyfill";

// 모듈화하면 아래처럼 js파일에서 필요한 style태그의 내용을 불러올 수 있다.
import styles from "./index.module.scss";
import andImg from "./images/and.png";
import svg from "./images/11.svg";
function component() {
  const element = document.createElement("div");
  element.innerHTML = `hello~`;
  const imgElem = document.createElement("img");
  // imgElem.src = svg;
  // element.appendChild(imgElem);
  console.log(styles, ": sytyles");
  // {hellowebpack: 'yi39fuEg1urw6SGiN6as'} ': sytyles'
  // 이렇게 key value 형태로 가져올수있다.
  element.classList = styles.hellowebpack;
  return element;
}

document.body.appendChild(component());
console.log($(`.${styles.hellowebpack}`).length);
console.log(`production:${IS_PRODUCTION}`);
console.log(` svg:${svg}`);
