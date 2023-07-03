$(document).ready(function(){
  $('.visual').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    dots: true,
    dotsClass: 'banner-dots flex-box',
    customPaging: (slider, i) => {
      return `<button type="button" class="banner-dot flex-box font-amiri">
        ${i + 1}<span class="blind">번 슬라이드로 이동</span>
      </button>`;
    },
    arrows: false,
    fade: true,
    cssEase: 'linear',
  });
});

const header = document.querySelector("header");

// Header Scroll Event
window.addEventListener("scroll", () => {
  if(window.scrollY >= 200) {
    if(header.classList.contains("on")) return;
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
});