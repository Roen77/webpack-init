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
const aBtn1 = document.querySelector(".apple_btn1");
const aBtn2 = document.querySelector(".apple_btn2");
const naver = document.querySelector(".naver");
const wopen = document.querySelector(".wopen");
const hrefbrn = document.querySelector(".href");

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
const text8 = document.querySelector(".text8");
const text9 = document.querySelector(".text9");
const text10 = document.querySelector(".text10");
const text11 = document.querySelector(".text11");
const text13 = document.querySelector(".text13");
const text14 = document.querySelector(".text14");

text14.textContent = `${isMobileSafari}`;
const storeUrl = isIOS
    ? "https://itunes.apple.com/app/id1498707344"
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
let timer;
const joinUrl = () => {
    isClickChk = true;

    //   setTimeout(() => {
    //     if (isClickChk && !Visibility.hidden()) {
    //       return (window.location = storeUrl);
    //     }
    //   }, 3000);
    timer = setTimeout(() => {
        // text9.textContent = `${opener && opener.closed}`;
        if (isMobileSafari && isClickChk && prevType === "onblur") {
            prevType = "";
            clearTimeout(timer);
            // setTimeout(() => {
            //     if (!Visibility.hidden()) return;
            //     else location.replace(storeUrl);
            // }, 5000);
            return;
        }
        if (isClickChk && !Visibility.hidden()) {
            clearTimeout(timer);
            return location.replace(storeUrl);
            // return (window.location = storeUrl);
        } else {
            clearTimeout(timer);
        }
    }, 2200);
    //   setTimeout(() => {
    //     if (Visibility.state() === "visible") {
    //       return (window.location = storeUrl);
    //     }
    // if (document.webkitHidden || document.hidden) {
    //   text4.textContent = "hidden 작동됨";
    // }
    // text2.textContent = "setTImeout 실행됨";
    // // if (type !== "appurl") {
    // //   window.location = storeUrl;
    // // }
    // // isClickChk = false;
    // if (type !== "hidden") {
    //   return (window.location = storeUrl);
    // }
    // console.log(document.visibilityState, "상태");
    // if (document.visibilityState === "visible") {
    //   return (window.location = storeUrl);
    // }
    // console.log("type확인", type);
    //   }, 3000);
    // const openAt = new Date();
    // window.confirm("ddd");
    //   setTimeout(() => {
    //     console.log(location, window.history);
    //     if (document.webkitHidden || document.hidden) {
    //       text4.textContent = "hidden 작동됨";
    //     }
    //     // text2.textContent = "setTImeout 실행됨";
    //     // if (prevType !== "onblur") {
    //     //     window.location = storeUrl;
    //     // }
    //     // prevType = "";

    //     text7.textContent = `${JSON.stringify(history)}`;
    //   }, 1000);
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
    //   window.open(launchAppUrl);
    // window.open(
    //     "https://naver.com",
    //     "window팝업",
    //     "toolbar=no,scrollbars=no,resizable=yes,status=no,menubar=no,width=260, height=120, top=0,left=0"
    // );
    // if (isIOS) {
    //     prevType = "isIosFocus";
    // }
    window.location = launchAppUrl;
    text13.textContent = `${launchAppUrl}`;
    // location.replace(launchAppUrl);
    //   if (isClickChk && !Visibility.hidden()) {
    //     return (window.location = storeUrl);
    //   }
    // console.log("opener 안의내용", opend);
    //   location.href = launchAppUrl;
};

// console.log("opener 밖의내용", opend);

// document.addEventListener("visibilitychange", function () {
//     if (isClickChk) {
//         if (document.visibilityState === "hidden") {
//             type = "hidden";
//         } else {
//             type = "visible";
//         }
//     }
//     //   alert("change");
//     //   console.log(document.hidden);
//     // 숨김 여부가 변했을 때의 행동
//     //   text8.textContent = "변화감지" + `${Math.random()}`;
//     //   text9.textContent = `${document.hidden}`;
//     //   text10.textContent = `${document.visibilityState}`;
//     //   if (isClickChk) {
//     //     type = "appurl";
//     //   }
// });

// aBtn1.addEventListener("click", () => {
//     location.replace("https://itunes.apple.com/app/id1498707344");
// });
// aBtn2.addEventListener("click", () => {
//     location.replace("https://itunes.apple.com/app/id1498707344");
// });
// naver.addEventListener("click", () => {
//     location.replace(launchAppUrl);
//     // location.replace("https://www.naver.com/");
// });
// wopen.addEventListener("click", () => {
//     // window.open("https://itunes.apple.com/app/id1498707344");
//     window.open(launchAppUrl);
// });
// hrefbrn.addEventListener("click", () => {
//     location.href = launchAppUrl;
//     // location.href = "https://www.naver.com/";
// });

// document.addEventListener("blur", () => {
//     text.textContent = "blur";
//     prevType = "blur";
// });
// document.addEventListener("focus", () => {
//     text.textContent = "focus";
//     prevType = "blur";
// });

window.onblur = function () {
    if (isMobileSafari) {
        text6.textContent = "onblur " + `${Math.ceil(Math.random() * 10)}`;
        prevType = "onblur";
    }
};
window.onfocus = function () {
    if (isMobileSafari && isClickChk) {
        text8.textContent = "onfocus";
        prevType = "onfocus";
        location.replace(storeUrl);
    }
    // text6.textContent = "focus";
    // prevType = "focus";
    // text.textContent = "onfocus";
    // prevType = "onfocus";
    // setTimeout(() => {
    //     $(document).trigger("blur");
    // }, 300);
};

// document.addEventListener("focusout", () => {
//     text8.textContent = "focusout";
// });

document.addEventListener("mouseout", () => {
    if (isIOS) {
        text3.textContent = "ios 마우스 나감";
    }
});

$(window).on("blur", function () {
    text7.textContent = " 제이쿼리blur";
});
$(window).on("focusout", function () {
    text8.textContent = "focusout";
});

console.log("onblur", prevType);
console.log("상태좀", Visibility.state());
// if ("hidden" == Visibility.state()) {
//   text4.textContent = `${Visibility.state()} 체크는 ${isClickChk}`;
// }
if ("prerender" == Visibility.state()) {
    alert("prerender'");
}
if (Visibility.state() === "visible") {
    text3.textContent = `${Visibility.state()} 체크는 ${isClickChk}`;
}

Visibility.change(function (e, state) {
    //   Statistics.visibilityChange(state);
    text4.textContent = `보여지는상태:${Visibility.state()} 클릭여부체크는 ${isClickChk}`;
    if (isClickChk && !Visibility.hidden()) {
        text5.textContent = `클리어 여부 ${Math.ceil(Math.random() * 100)}`;
        clearTimeout(timer);
    }

    //   if (isClickChk) {
    //     isClickChk = false;
    //   }
});

joinBtn.addEventListener("click", joinUrl);
