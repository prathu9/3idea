var swiper = new Swiper(".mySwiper", {
  slidesPerView: 7,
  spaceBetween: 30,
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '#js-next4',
      prevEl: '#js-prev4',
  },
});