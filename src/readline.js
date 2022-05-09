const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const { getCircleArea, getRecArea } = require("./mathUtil");
// rl.question("원하는 도형을 입력해주세요:", (input) => {
//   console.log(input);
//   rl.close();
// });

rl.question("넓이구하기:", (figure) => {
  console.log(`선택한 도형 ${figure}`);
  switch (figure) {
    case "정사각형":
      rl.question("변의 길이 입력:", (input) => {
        console.log("입력한 값:", input);
        console.log("입력한 넓이:", getRecArea(input));
        rl.close();
      });
    case "원":
      rl.question("원의 길이 입력:", (input) => {
        console.log("입력한 값:", input);
        console.log("입력한 넓이:", getCircleArea(input));
        rl.close();
      });
    default:
      console.log("입력한 도형은 없다.");
      rl.close();
  }
});

/*
src 폴더안에 index.js가 있고 dist 폴더가 존재해야 터미널에서 명령어로 webpack를 실행할수있다.
/dist , /src/index.js

wewbpack 실행시 target이란 어떤 환경에서 실행되는지 설정해주는것! 웹팩에게 어떠한 환경인지 알려준다.
npx webpack --target=node
 */
