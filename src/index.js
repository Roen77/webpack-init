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
import { isIOS } from "mobile-device-detect";
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
const aBtn1 = document.querySelector(".apple_btn1");
const aBtn2 = document.querySelector(".apple_btn2");
const naver = document.querySelector(".naver");
const wopen = document.querySelector(".wopen");

let prevType;
let answer;
// 앱 스키마 uri
const launchAppUrl = "bowling710://m.chilten.com";
const text = document.querySelector(".text");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const text4 = document.querySelector(".text4");
const text5 = document.querySelector(".text5");
const text6 = document.querySelector(".text6");
const text7 = document.querySelector(".text7");
const storeUrl = isIOS
    ? "https://itunes.apple.com/app/id1498707344"
    : "https://play.google.com/store/apps/details?id=com.gameone.bowling710";

const chk = () => {
    return new Promise(res => {
        location.href = launchAppUrl;
    });
};
const joinUrl = () => {
    // const openAt = new Date();
    // window.confirm("ddd");
    setTimeout(() => {
        console.log(location, window.history);
        if (document.webkitHidden || document.hidden) {
            text4.textContent = "hidden 작동됨";
        }
        // text2.textContent = "setTImeout 실행됨";
        // if (prevType !== "onblur") {
        //     window.location = storeUrl;
        // }
        // prevType = "";

        text7.textContent = `${JSON.stringify(history)}`;
    }, 1000);
    // if (isIOS) {
    //     //사파리 이외
    //     if (prev !== "blur") {
    //         $(document).trigger("blur");
    //     }
    // } else {
    //     setTimeout(() => {
    //         if (document.webkitHidden || document.hidden) {
    //             text4.textContent = "hidden 작동됨";
    //         }
    //         text2.textContent = "setTImeout 실행됨";
    //         if (prevType !== "onblur") {
    //             window.location = storeUrl;
    //         }
    //         prevType = "";
    //     }, 1000);
    // }

    // location.replace(launchAppUrl);
    // window.open(launchAppUrl);
    // window.open("https://naver.com");
    // if (isIOS) {
    //     prevType = "isIosFocus";
    // }
    // window.location = launchAppUrl;

    location.href = launchAppUrl;
};
joinBtn.addEventListener("click", joinUrl);
aBtn1.addEventListener("click", () => {
    location.replace("https://itunes.apple.com/app/id1498707344");
});
aBtn2.addEventListener("click", () => {
    location.replace("https://itunes.apple.com/app/id1498707344");
});
naver.addEventListener("click", () => {
    location.replace("https://www.naver.com/");
});
wopen.addEventListener("click", () => {
    window.open("https://itunes.apple.com/app/id1498707344");
});

// document.addEventListener("blur", () => {
//     text.textContent = "blur";
//     prevType = "blur";
// });
// document.addEventListener("focus", () => {
//     text.textContent = "focus";
//     prevType = "blur";
// });

window.onblur = function () {
    text.textContent = "onblur";
    prevType = "onblur";
};
window.onfocus = function () {
    if (prevType === "onblur") {
        prevType = "";
    }
    text6.textContent = "focus";
    prevType = "focus";
    // text.textContent = "onfocus";
    // prevType = "onfocus";
    // setTimeout(() => {
    //     $(document).trigger("blur");
    // }, 300);
};

document.addEventListener("mouseout", () => {
    if (isIOS) {
        text3.textContent = "ios 마우스 나감";
    }
});

$(window).on("blur", function () {
    text5.textContent = " 제이쿼리blur";
});
$(window).on("focus", function () {
    text6.textContent = " 제이쿼리포커스";
});

console.log("onblur", prevType);
