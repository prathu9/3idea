var swiper = new Swiper(".mySwiper", {
  slidesPerView: 7,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  
  pagination: {
      el: '.swiper-pagination1',
      clickable: true,
  },
  navigation: {
      nextEl: '#js-next4',
      prevEl: '#js-prev4',
  },
});
