
const swiper = new Swiper('.swiper', {

    slidesPerView: 10,
    slidesperGroup: 1,
    loop: true,
    direction: 'horizontal',

    pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
    },
    scrollbar: false,
});


// const swiper_3 = new Swiper('.swiper-3', {
    
//     loop: true,
//     direction: 'horizontal',

//     pagination: {
//         el: '.swiper-pagination-3',
//         clickable: 'true',
//     },
//     scrollbar: false,
    
//     breakpoints: {
//       320: { slidesPerView: 1.2 },
//       480: { slidesPerView: 2 },
//     },

// });


document.addEventListener('DOMContentLoaded', function() {
    const swiper_3 = new Swiper('.swiper-3', {
        loop: true,
        direction: 'horizontal',
        slidesPerView: 4.9,
        slidesperGroup: 'auto',
        spaceBetween: 30,

        pagination: {
            el: '.swiper-pagination-3',
            clickable: true, 
            type: 'bullets'
        },
        scrollbar: {
            hide: true
        }
    });
});



// const swiper_3 = new Swiper('.swiper-3', {
//     loop: true,
//     direction: 'horizontal',
//     slidesPerView: 10,
//     spaceBetween: 20,

//     pagination: {
//         el: '.swiper-pagination-3',
//         clickable: true, 
//         type: 'bullets'
//     },
//     scrollbar: {
//         hide: true
//     }
// });
