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

(function(){
    const swiper5 = new Swiper(".cover-swiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 15000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination5',
            clickable: true,
        },
        navigation: {
            nextEl: '#js-next5',
            prevEl: '#js-prev5',
        },
    })

    function getFirstChild(el){
        var firstChild = el.firstChild;
        while(firstChild != null && firstChild.nodeType == 3){ 
          firstChild = firstChild.nextSibling;
        }
        return firstChild;
      }

    const cloneAndReplaceNode = (elem) => {
        const newone = elem.cloneNode(true);
        elem.parentNode.replaceChild(newone, elem);
    }

    swiper5.on("slideChange", () => {
        const currentActiveIndex = swiper5.realIndex;
        const currentSlide = swiper5.slides[currentActiveIndex];
        cloneAndReplaceNode(currentSlide.querySelector(".cover-container"));
        cloneAndReplaceNode(currentSlide.querySelector(".cover-title"));
        cloneAndReplaceNode(currentSlide.querySelector(".cover-img"));
    })
})();
