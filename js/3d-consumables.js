var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
});

(function(){
  const swiper1 = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '#js-next1',
        prevEl: '#js-prev1',
    },
    breakpoints: {
        420:{
            slidesPerView: 2,
            spaceBetween: 5,
        },
        640:{
            slidesPerView: 3,
            spaceBetween: 5,
        },
        768:{
            slidesPerView: 4,
            spaceBetween: 5,
        },
        1140: {
            slidesPerView: 5,
            spaceBetween: 5,
        },
    }
});
})()