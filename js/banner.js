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
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: false,
      }
    }],
  });
});

const header = document.querySelector("header");

// Header Scroll Event
const onScrolled = () => {
  if(window.scrollY >= 200) {
    if(header.classList.contains("on")) return;
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
};

const toggleHeaderScrollEvent = () => {
  if(window.innerWidth >= 1200) {
    window.addEventListener("scroll", onScrolled);
  } else {
    window.removeEventListener("scroll", onScrolled);
  }
};

const getVerticalMargin = (el) => {
  const style = window.getComputedStyle(el);

  return parseInt(style.marginTop) + parseInt(style.marginBottom);
};

const getElementHeight = (el) => {
  const height = el.getBoundingClientRect().height;
  const margin = getVerticalMargin(el);

  return height + margin;
};

const setPaddingBottom = (el, num) => el.style.paddingBottom = `${num}px`;
const setHeight = (el, height) => el.style.height = `${height}px`;

// Story Section Auto Height
const setStorySectionHeight = () => {
  const tabCont = document.querySelector(".video-tab .tab-cont");
  const secCont = document.querySelector(".story-sec .sec-cont");
  
  if(window.innerWidth > 992) {
    setHeight(secCont, getElementHeight(tabCont));
  } else {
    secCont.style.height = "auto";
  }
}

// Product Section Auto Height
const setProductSectionHeight = () => {
  const tabCont = document.querySelector(".product-tab .tab-cont");
  const secCont = document.querySelector(".product-sec .sec-cont");

  setPaddingBottom(secCont, getElementHeight(tabCont));
}

// Browser Load Event
toggleHeaderScrollEvent();
setStorySectionHeight();
setProductSectionHeight();

// Browser Resize Event
let delay = 300;
let timer = null;

window.addEventListener("resize", () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    toggleHeaderScrollEvent();
    setStorySectionHeight();
  }, delay);

  setProductSectionHeight();
});