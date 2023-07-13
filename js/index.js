const header = document.querySelector("header");
const storyTabCont = document.querySelector(".video-tab .tab-cont");
const storySecCont = document.querySelector(".story-sec .sec-cont");
const productTabCont = document.querySelector(".product-tab .tab-cont");
const productSecCont = document.querySelector(".product-sec .sec-cont");
const menuToggleBtn = document.querySelector(".btn-mb-menu");
const mobileNav = document.querySelector(".nav-wrapper");
const menuCategory = document.querySelectorAll(".menu-link");
let delay = 300;
let timer = null;

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

const removeClass = (target, arr, className) => {
  arr.forEach((item) => {
    if(item !== target) {
      item.parentElement.classList.remove(className + "")
    }
  });
};

menuToggleBtn.addEventListener("click", (e) => {
  menuToggleBtn.classList.toggle("on");
  mobileNav.classList.toggle("on");
  removeClass("", menuCategory, "on");
});

// Mobile Nav Accordion Event
menuCategory.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const _this = e.target;
    
    removeClass(_this, menuCategory, "on");
    _this.parentElement.classList.toggle("on");
  });
});

// Browser Load Event
toggleHeaderScrollEvent();
setStorySectionHeight();
setProductSectionHeight();

// Browser Resize Event
window.addEventListener("resize", () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    toggleHeaderScrollEvent();
    setStorySectionHeight();
  }, delay);

  setProductSectionHeight();
});