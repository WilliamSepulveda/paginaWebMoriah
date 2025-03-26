document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centeredSlides: true,
        centerInsufficientSlides: true, // Centra cuando hay pocos elementos
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });
});
