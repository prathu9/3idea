(function () {

    'use strict';

    const swiper1 = new Swiper('.swiper1', {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
        },
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

    const buildSwiperSlider = sliderElm => {
        const sliderIdentifier = sliderElm.dataset.id;

        return new Swiper(`#${sliderElm.id}`, {
            slidesPerView: 1,
            spaceBetween: 5,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: `#js-next${sliderIdentifier}`,
                prevEl: `#js-prev${sliderIdentifier}`
            },
            pagination: {
                el: `.swiper-pagination-${sliderIdentifier}`,
                type: 'progressbar',
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
    }

    // Get all of the swipers on the page
    const allSliders = document.querySelectorAll('.swiper2');
    // Loop over all of the fetched sliders and apply Swiper on each one.
    allSliders.forEach(slider => buildSwiperSlider(slider));

    const swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 3,
        spaceBetween: 0,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            240:{
                slidesPerView: 2,
            },
            450: {
                slidesPerView: 3,
            },
        }
    });
})(); /* IIFE end */
