function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 7.172495991830042, lng:-73.13366387789854  },
      zoom: 8,
    });
  }
  
  window.initMap = initMap; // Hacer accesible globalmente
  




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


// Obtener elementos del DOM
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMoriah = document.getElementById('navMoriah');
    const overlay = document.getElementById('menu-overlay');
    const menuBtn = document.getElementById('menu-btn');

    function toggleMenu() {
        if (navMoriah.classList.contains('open')) {
            navMoriah.classList.remove('open');
            overlay.classList.remove('active');
            menuToggle.checked = false;
        } else {
            navMoriah.classList.add('open');
            overlay.classList.add('active');
        }
    }

    menuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
});


  

