(function(){
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
            250:{
                slidesPerView: 3,
                spaceBetween: 10,
            },
          385:{
              slidesPerView: 4,
              spaceBetween: 10,
          },
          720:{
              slidesPerView: 5,
              spaceBetween: 18,
          },
      }
      });
})();

(function(){
    const mainImg = document.querySelector(".product-img img");
    const thumbnailImgs = document.querySelectorAll(".slide-item-wrapper img");
    thumbnailImgs.forEach((thumbnailImg) => {
        thumbnailImg.addEventListener("click", (e) =>{
            mainImg.src = e.currentTarget.src;
        })
    })
})();
