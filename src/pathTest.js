const path = require("path");
// D:\webpack_prac\01_webpack\src 내가 사용한 파일의 절대 경로
console.log(__dirname);

const pathTest = path.resolve(__dirname, "abc");
// D:\webpack_prac\01_webpack\src\abc 내가 사용한 파일의 절대 경로에서 abc 추가!
console.log(pathTest);
