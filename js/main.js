window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 7.172495991830042, lng:-73.13366387789854  },
      zoom: 20,
    });
};

// dark mode 


// Swiper.js carrucel de eventos 
document.addEventListener("DOMContentLoaded", function () {
    // Swiper.js con efecto fade
    const swiper = new Swiper(".mySwiper", {
        effect: "fade", // Activa el efecto de desvanecimiento
        fadeEffect: { crossFade: true }, // Mejora el efecto de transición
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        pagination: { el: ".swiper-pagination", clickable: true }
    });

    // Animaciones de entrada con IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
});


