var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '#js-next',
        prevEl: '#js-prev',
    },
    breakpoints: {
      385:{
          slidesPerView: 2,
          spaceBetween: 10,
      },
      720:{
          slidesPerView: 5,
          spaceBetween: 18,
      },
  }
  });