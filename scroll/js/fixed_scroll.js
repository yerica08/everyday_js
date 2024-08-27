// const wrapperE1 = document.querySelector(".js-wrapper");
// const slides = document.querySelector(".js-slide");

// slides.forEach(function (slide, idx) {
//   if (idx === 0) return;
//   const slideImage = slide.querySelector("img");
//   gsap.set(slide, { yPercent: 100 });
//   gsap.set(slideImage, { yPercent: -100 });
// });

// const scroll = () => {
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: wrapperE1,
//       start: "top top",
//       end: `+=${slides.length * 100}%`,
//       scrub: true,
//       pin: true,
//     },
//     defaults: { ease: "none" },
//   });

//   slides.forEach(function (slide, idx) {
//     if (idx === slides.length - 1) return;
//     const slideImg = slide.querySelector("img");
//     const nextSlide = slides[idx + 1];
//     const nextSlideImg = slides[idx + 1].querySelector("img");
//     tl.to(slide, { yPercent: -100 })
//       .to(slideImg, { yPercent: 100 }, "<")
//       .to(nextSlide, { yPercent: 0 }, "<")
//       .to(nextSlideImg, { yPercent: 0 }, "<");
//   });
// };
// scroll();

// 혼자서 스크롤 됨
document.addEventListener("DOMContentLoaded", () => {
  const wrapperE1 = document.querySelector(".js-wrapper");
  const slides = document.querySelectorAll(".js-slide");

  slides.forEach(function (slide, idx) {
    if (idx === 0) return;
    const slideImage = slide.querySelector("img");
    gsap.set(slide, { yPercent: 100 });
    gsap.set(slideImage, { yPercent: -100 });
  });

  const scroll = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperE1,
        start: "top top",
        end: `+=${slides.length * 100}vh`, // vh로 변경
        scrub: true,
        pin: true,
      },
      defaults: { ease: "none" },
    });

    slides.forEach(function (slide, idx) {
      if (idx === slides.length - 1) return;
      const slideImg = slide.querySelector("img");
      const nextSlide = slides[idx + 1];
      const nextSlideImg = slides[idx + 1].querySelector("img");
      tl.to(slide, { yPercent: -100, duration: 1 })
        .to(slideImg, { yPercent: 100, duration: 1 }, "<")
        .to(nextSlide, { yPercent: 0, duration: 1 }, "<")
        .to(nextSlideImg, { yPercent: 0, duration: 1 }, "<");
    });
  };

  scroll();
});

// ----------------------------------------------------------
// document.addEventListener("DOMContentLoaded", () => {
//   const wrapperE1 = document.querySelector(".js-wrapper");
//   const slides = document.querySelectorAll(".js-slide");
//   const slideCount = slides.length;
//   let currentSlideIndex = 0;

//   // 초기 슬라이드 설정
//   slides.forEach((slide, idx) => {
//     if (idx === 0) return;
//     gsap.set(slide, { yPercent: 100 }); // 나머지 슬라이드 아래로 이동
//   });

//   // 스크롤 이벤트 핸들러
//   const handleScroll = (event) => {
//     event.preventDefault(); // 기본 스크롤 방지

//     if (event.deltaY > 0) {
//       // 아래로 스크롤
//       if (currentSlideIndex < slideCount - 1) {
//         const currentSlide = slides[currentSlideIndex];
//         const nextSlide = slides[currentSlideIndex + 1];

//         // 애니메이션
//         gsap.to(currentSlide, { yPercent: -100, duration: 1 });
//         gsap.to(nextSlide, { yPercent: 0, duration: 1 });
//         currentSlideIndex++;
//       }
//     } else {
//       // 위로 스크롤
//       if (currentSlideIndex > 0) {
//         const currentSlide = slides[currentSlideIndex];
//         const previousSlide = slides[currentSlideIndex - 1];

//         // 애니메이션
//         gsap.to(currentSlide, { yPercent: 100, duration: 1 });
//         gsap.to(previousSlide, { yPercent: 0, duration: 1 });
//         currentSlideIndex--;
//       }
//     }
//   };

//   // 스크롤 이벤트 리스너 추가
//   window.addEventListener("wheel", handleScroll, { passive: false });
// });
