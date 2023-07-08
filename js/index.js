const header = document.querySelector("header");
const storyTabCont = document.querySelector(".video-tab .tab-cont");
const storySecCont = document.querySelector(".story-sec .sec-cont");
const productTabCont = document.querySelector(".product-tab .tab-cont");
const productSecCont = document.querySelector(".product-sec .sec-cont");

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

// Story Section Auto Height
const setStorySectionHeight = () => {
  if(window.innerWidth > 992) {
    const height = getElementHeight(storyTabCont);
    setHeight(storySecCont, height);
  } else {
    storySecCont.style.height = "auto";
  }
}

// Product Section Auto Height
const setProductSectionHeight = () => {
  const height = getElementHeight(productTabCont);
  setPaddingBottom(productSecCont, height);
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