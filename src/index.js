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