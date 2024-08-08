"user strict";

// li 안의 이미지
// get들은 속성에 접근할 수 없기 때문에 querySelector로 불러옴
const pics = document.querySelectorAll(".pic");
// light box(부모 박스)
const lightBox = document.querySelector("#light_box");
// light box 안의 이미지
const lightBoxImg = document.querySelector("#light_box_img");

// 이미지를 잘 데려오고 있나 확인
// HTMLCollaction에 pic들이 배열로 들어간 것을 확인
console.log(pics);

// 썸네일 이미지를 클릭하면 실행할 이벤트 핸들러
// 반복문으로 HTMLCollaction 안에 있는 img 태그들에 돌아가면서 이벤트를 추가한다.
for (let i = 0; i < pics.length; i++) {
  pics[i].addEventListener("click", showLightBox);
  function showLightBox() {
    // 태그에 있는 데이터를 넘겨받는다.
    let bigImageLocation = this.getAttribute("data-src");
    // 라이트 박스 안에 있는 큰 이미지의 경로를 클릭한 해당 이미지로 바꾼다.
    lightBoxImg.setAttribute("src", bigImageLocation);
    //부모박스인 라이트박스를 나타낸다.
    lightBox.style.display = "flex";
  }
}

// 라이트박스를 클릭하면 라이트 박스를 숨겨서 썸네일 다시 보여주기
lightBox.onclick = function () {
  lightBox.style.display = "none";
};
