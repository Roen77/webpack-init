// node -r esm index.js로 실행

// index.js 모듈화하지 않았을 경우에는 그냥 import만 하면 된다.
import "normalize.css";
// import "./index.css";
import $ from "jquery";

// babel polyfill은 js파일에 불러와야한다.
// index.js
import "@babel/polyfill";
import { isIOS } from "mobile-device-detect";

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

const joinBtn = document.querySelector(".join_btn");
// 앱 스키마 uri
const launchAppUrl = "bowling710://m.chilten.com";
const storeUrl = isIOS
    ? "https://apps.apple.com/kr/app/%EC%B9%A0%ED%85%90/id1498707344"
    : "https://play.google.com/store/apps/details?id=com.gameone.bowling710";

let timer; // 타이머

let schInterval; // 인터벌

// 인터벌, 타이머 삭제

function clearTimer() {
    clearInterval(schInterval);

    clearTimeout(timer);
}

// 인터벌 마다 동작할 기능

function intervalSch() {
    // 매 인터벌 마다 웹뷰가 활성화 인지 체크

    if (document.webkitHidden || document.hidden) {
        // 웹뷰 비활성화

        clearTimer(); // 앱이 설치되어있을 경우 타이머 제거
        // alert("앱이 설치 되어 있습니다.");
    } else {
        // 웹뷰 활성화
        // console.log("타이머 동작");
    }
}

const joinUrl = () => {
    var now = new Date().valueOf();
    setTimeout(function () {
        if (new Date().valueOf() - now > 100) return;
        window.location = storeUrl;
    }, 25);
    window.location = launchAppUrl;
};

// const joinUrl = () => {
//     const openAt = new Date();

//     setTimeout(() => {
//         if (new Date() - openAt < 2000) {
//             location.replace(storeUrl);
//         }
//     }, 1900);

//     location.replace(launchAppUrl);
// };

joinBtn.addEventListener("click", joinUrl);
