var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 28,
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '#js-next4',
      prevEl: '#js-prev4',
  },
  breakpoints: {
    385:{
        slidesPerView: 2,
        spaceBetween: 29,
    },
    720:{
        slidesPerView: 3,
        spaceBetween: 29,
    },
    868:{
        slidesPerView: 4,
        spaceBetween: 29,
    },
    1000:{
        slidesPerView: 5,
        spaceBetween:29,
    },
    1140:{
        slidesPerView: 6,
        spaceBetween: 29,
    },
    1282: {
        slidesPerView: 7,
        spaceBetween: 29,
    },
}
});