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
