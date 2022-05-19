// node -r esm index.js로 실행

// index.js 모듈화하지 않았을 경우에는 그냥 import만 하면 된다.
import "normalize.css";
// import "./index.css";
import $ from "jquery";

import Visibility, { Statistics } from "visibilityjs";

// babel polyfill은 js파일에 불러와야한다.
// index.js
import "@babel/polyfill";

// 모듈화하면 아래처럼 js파일에서 필요한 style태그의 내용을 불러올 수 있다.
import styles from "./index.module.scss";
import { isIOS, isMobileSafari } from "mobile-device-detect";
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

const joinBtn = document.querySelector(".join_btn");
const joinBtn2 = document.querySelector(".join_btn2");
const joinBtn3 = document.querySelector(".join_btn3");
const aBtn1 = document.querySelector(".apple_btn1");
const aBtn2 = document.querySelector(".apple_btn2");
const naver = document.querySelector(".naver");
const wopen = document.querySelector(".wopen");
const hrefbrn = document.querySelector(".href");

let prevType;
let answer;
// 앱 스키마 uri
// const launchAppUrl = "bowling710://m.chilten.com";
const launchAppUrl = "bowling710://auth/login";
const text = document.querySelector(".text");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const text4 = document.querySelector(".text4");
const text5 = document.querySelector(".text5");
const text6 = document.querySelector(".text6");
const text7 = document.querySelector(".text7");
const text8 = document.querySelector(".text8");
const text9 = document.querySelector(".text9");
const text10 = document.querySelector(".text10");
const text11 = document.querySelector(".text11");
const text13 = document.querySelector(".text13");
const text14 = document.querySelector(".text14");
const text15 = document.querySelector(".text15");

text14.textContent = `${isMobileSafari}`;
// const storeUrl = isIOS
//     ? isMobileSafari
//         ? "itms-apps://itunes.apple.com/app/id1498707344"
//         : "https://itunes.apple.com/app/id1498707344"
//     : "https://play.google.com/store/apps/details?id=com.gameone.bowling710";
const storeUrl = isIOS
    ? "https://apps.apple.com/kr/app/%EC%B9%A0%ED%85%90/id1498707344"
    : "https://play.google.com/store/apps/details?id=com.gameone.bowling710";

// 앱 스키마 uri

// $(".join_btn").click(function () {
//   // 앱 실행(iOS인 경우)
//   location.href = launchAppUrl;
//   // 앱이 설치 되어있는지 체크
//   schInterval = setInterval(intervalSch, 500);
//   timer = setTimeout(function () {
//     alert("앱이 설치되어있지 않습니다.");
//     clearInterval(schInterval);
//   }, 2000);
// });

const chk = () => {
    return new Promise(res => {
        location.href = launchAppUrl;
    });
};

let isClickChk = false;
const opend = window.opener;
let type;
let test;
let timer;
let timer2;
const joinUrl = () => {
    const openAt = new Date();

    setTimeout(() => {
        if (new Date() - openAt < 2000) {
            location.replace(storeUrl);
        }
    }, 1000);

    location.href = launchAppUrl;
};

joinBtn.addEventListener("click", joinUrl);
joinBtn2.addEventListener("click", () => {
    window.location = "bowling710://auth/login";
});
joinBtn3.addEventListener("click", () => {
    window.location = "bowling710://rrrr";
});
