const counters = document.querySelectorAll('.number');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const speed = 200; // menor es más rápido
    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target + '+';
    }
  };

  // Detectar si está en pantalla
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCount();
        observer.unobserve(counter); // solo una vez
      }
    });
  }, { threshold: 1 });

  observer.observe(counter);
});


  const btn = document.getElementById("toTopBtn");

  window.onscroll = () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  };

  btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
