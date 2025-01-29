window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 7.172495991830042, lng:-73.13366387789854  },
      zoom: 20,
    });
};



document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    if (!track) {
        console.error("No se encontró el elemento .carousel-track");
        return;
    }

    const trackContainer = track.parentElement; // Contenedor del carrusel
    const cardWidth = 320; // Ajusta según el ancho de tus tarjetas
    const maxScroll = track.scrollWidth - trackContainer.clientWidth;
    let position = 0;

    function scrollLeft() {
        position = Math.min(position + cardWidth, 0);
        track.style.transform = `translateX(${position}px)`;
    }

    function scrollRight() {
        position = Math.max(position - cardWidth, -maxScroll);
        track.style.transform = `translateX(${position}px)`;
    }

    // Hacer accesibles globalmente
    window.scrollleft = scrollLeft;
    window.scrollRight = scrollRight;
});
