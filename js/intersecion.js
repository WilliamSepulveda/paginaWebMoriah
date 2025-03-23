document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");
  const slideElements = document.querySelectorAll(".slide-up");
  const zoomElements = document.querySelectorAll(".zoom-in");

  function animateElements(elements) {
    elements.forEach((element) => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(element);
    });
  }

  animateElements(fadeElements);
  animateElements(slideElements);
  animateElements(zoomElements);

  const button = document.querySelector("button");
  button.addEventListener("mouseover", function () {
    button.classList.add("pulse");
  });

  button.addEventListener("mouseleave", function () {
    button.classList.remove("pulse");
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navMoriah = document.getElementById('navMoriah');
  const overlay = document.getElementById('menu-overlay');
  const menuBtn = document.getElementById('menu-btn');

  function toggleMenu() {
      const isOpen = navMoriah.classList.contains('open');

      if (isOpen) {
          navMoriah.classList.remove('open');
          overlay.classList.remove('active');
          menuToggle.checked = false; // Desmarcar el checkbox
      } else {
          navMoriah.classList.add('open');
          overlay.classList.add('active');
          menuToggle.checked = true; // Marcar el checkbox
      }
  }

  menuBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
});


const btn = document.getElementById("toTopBtn");

window.onscroll = () => {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
};

btn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
