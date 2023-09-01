const icon = document.querySelector(".icon");
const navChildOne = document.querySelector(".nav-child-one");
const solutionContainer = document.querySelector(".solutions-container");

console.log(navChildOne);

navChildOne.addEventListener("click", () => {
  icon.classList.toggle("arrow-icon");
  solutionContainer.classList.toggle("show-solution-container");

  if (exploreContainer.classList.contains("show-explore-container")) {
    exploreContainer.classList.toggle("show-explore-container");
  }
});

const exploreContainer = document.querySelector(".explore-container");
const navChildTwo = document.querySelector(".nav-child-two");

navChildTwo.addEventListener("click", () => {
  if (solutionContainer.classList.contains("show-solution-container")) {
    solutionContainer.classList.toggle("show-solution-container");
    icon.classList.toggle("arrow-icon");
  }

  exploreContainer.classList.toggle("show-explore-container");
});

const language = document.querySelector(".lang");
const currency = document.querySelector(".curr");
const languageContainer = document.querySelector(".lang-cont");
const currencyContainer = document.querySelector(".currency-container");

console.log(language);

language.addEventListener("click", () => {
  if (currency.classList.contains("category-border"))
    currency.classList.remove("category-border");
  language.classList.add("category-border");

  languageContainer.classList.add("lang-cont-visible");

  if (currencyContainer.classList.contains("currency-container-visible"))
    currencyContainer.classList.remove("currency-container-visible");
});

currency.addEventListener("click", () => {
  if (language.classList.contains("category-border"))
    language.classList.remove("category-border");

  currency.classList.add("category-border");

  if (languageContainer.classList.contains("lang-cont-visible"))
    languageContainer.classList.remove("lang-cont-visible");

  currencyContainer.classList.add("currency-container-visible");
});

const languageContainerSection = document.querySelector(".language-container");
const languageChild = document.querySelector(".language-child");

const closeIcon = document.querySelector(".close-icon");
console.log(closeIcon);

languageChild.addEventListener("click", () => {
  if (solutionContainer.classList.contains("show-solution-container")) {
    solutionContainer.classList.toggle("show-solution-container");
    icon.classList.toggle("arrow-icon");
  }
  //
  if (exploreContainer.classList.contains("show-explore-container"))
    exploreContainer.classList.toggle("show-explore-container");
  //
  languageContainerSection.classList.add("l-container-v");
});

// closeIcon.addEventListener("click", () => {
//   languageContainerSection.classList.add("l-container-i");
// });

const mainSignIn = document.querySelector(".main-signin");
console.log(mainSignIn);
const sellerCont = document.querySelector(".bb");

//become a seller
sellerCont.addEventListener("click", () => {
  mainSignIn.classList.add("show-container");
  if (solutionContainer.classList.contains("show-solution-container")) {
    solutionContainer.classList.toggle("show-solution-container");
    icon.classList.toggle("arrow-icon");
  }
  //
  if (exploreContainer.classList.contains("show-explore-container"))
    exploreContainer.classList.toggle("show-explore-container");
});

//whole page
mainSignIn.addEventListener("click", () => {
  mainSignIn.classList.remove("show-container");
});

// let array = [1, 2, 3, 4, 5];

// array.forEach((element) => {
//   console.log(element);
// });

//

document.addEventListener("click", (e) => {
  const isDropDownButton = e.target.matches("[data-dropdown-button]");

  if (!isDropDownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;

  if (isDropDownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }
  document.querySelectorAll("[data-dropdown].active").forEach((dropDown) => {
    if (dropDown == currentDropdown) return;
    dropDown.classList.remove("active");
  });
});

//

var header = document.querySelector(".nav");
console.log(header);

var subNav = document.querySelector(".nav-wrapper");
var searchContainer = document.querySelector(".header-search-container");

// trigger this function every time the user scrolls
window.onscroll = function (event) {
  var scroll = window.pageYOffset;

  if (scroll < 10) header.classList.remove("scroll-header");
  else if (scroll > 10) {
    header.classList.add("scroll-header");

    if (scroll < 150) {
      subNav.classList.remove("nav-show");

      searchContainer.classList.remove("header-show");
    } else if (scroll > 150) {
      {
        subNav.classList.add("nav-show");
        searchContainer.classList.add("header-show");
      }
    }
  }
};

//
//
//

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    //
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

//
//
//
//
//  carousle javascript

// when i click left, move slides to the left

const track = document.querySelector(".carousel__track");
// console.log(track.children);

//stores an object of elements inside of slides in an array form
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button__right");
const prevButton = document.querySelector(".carousel__button__left");
const dotsNav = document.querySelector(".carousel__nav");

// stores all the individual dots in an variable
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex == 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex == slides.length - 1) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
};

//when i click left, move slides to the left
prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide == prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

// when i click right, move slides to the right
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide == nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

//when i click nav indicator,move to that slide

dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);

  const targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);
  console.log(targetDot);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});
