(function () {

    'use strict';

    const swiper1 = new Swiper('.swiper1', {
        slidesPerView: 5,
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
    });

    const buildSwiperSlider = sliderElm => {
        const sliderIdentifier = sliderElm.dataset.id;

        return new Swiper(`#${sliderElm.id}`, {
            slidesPerView: 5,
            spaceBetween: 1,
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
        });
    }

    // Get all of the swipers on the page
    const allSliders = document.querySelectorAll('.swiper2');
    // Loop over all of the fetched sliders and apply Swiper on each one.
    allSliders.forEach(slider => buildSwiperSlider(slider));
})(); /* IIFE end */
