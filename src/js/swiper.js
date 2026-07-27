import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const gallerySwiper = new Swiper('.gallery-swiper', {
  modules: [Navigation],

  slidesPerView: 1,
    spaceBetween: 16,
  loop: true,

  navigation: {
    prevEl: '.gallery-button-prev',
    nextEl: '.gallery-button-next',
  },

  breakpoints: {
    1440: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  },
});