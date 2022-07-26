import 'normalize.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';

import Swiper, { Navigation, Pagination } from 'swiper';

var swiper = new Swiper(".offerSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        slidesPerGroup: 1
      },
      769: {
          slidesPerView: 2,
          slidesPerGroup: 2
      },
      1000: {
          slidesPerView: 3,
          slidesPerGroup: 3
      }
    }
});
var swiper = new Swiper(".trendsSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation, Pagination],
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1001: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  }
});
var swiper = new Swiper(".categorySwiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Dropdown
function openModal() {
  document.getElementById("dropdown").style.display = "block";
}
function classModal() {
  document.getElementById("dropdown").style.top = "-400px";
}

// Smooth
const anchors = document.querySelectorAll('.header__nav a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
  e.preventDefault()
   
  const blockID = anchor.getAttribute('href').substr(1)
   
  document.getElementById(blockID).scrollIntoView({
  behavior: 'smooth',
  block: 'start'
  })
  })
};

// burger

const burgerOpen = document.getElementById('header__burger');
const modal = document.getElementById('burger__modal');
const overlay = document.getElementById('burger__overlay');
const burgerClose = document.getElementById('burger__close');
const bodyLock = document.body;

burgerOpen.addEventListener('click', () => {
    modal.classList.add('active');
    bodyLock.classList.add('lock');
});

function closeBurger(){
    modal.classList.remove('active');
    bodyLock.classList.remove('lock');
}

overlay.addEventListener('click',closeBurger);
burgerClose.addEventListener('click',closeBurger);

const theLinks = document.querySelectorAll(".burger__link");
theLinks.forEach(link => link.addEventListener("click", ()=>{
  bodyLock.classList.remove('lock');
  modal.classList.remove('active');
}));

// Button Up
window.onscroll = function(){scrollFunction()};

const upbuttons = document.querySelectorAll(".button-up");

for (const upbutton of upbuttons) {
    upbutton.addEventListener("click", clickHandler);
}

function clickHandler(e) {
e.preventDefault();
const href = this.getAttribute("href");

document.querySelector(href).scrollIntoView({
    behavior: "smooth"
});
}

function scrollFunction(){
    if ( document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        document.getElementById('btnUp').className = 'button-up visible';
    } else {
        document.getElementById('btnUp').className = 'button-up hidden';
    }
}