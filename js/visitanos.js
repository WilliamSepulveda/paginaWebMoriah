function getNextEvent(day, hour, minute) {
  let now = new Date();
  let eventDate = new Date(now);
  eventDate.setDate(now.getDate() + ((day + 7 - now.getDay()) % 7 || 7));
  eventDate.setHours(hour, minute, 0, 0);

  if (eventDate < now) {
    eventDate.setDate(eventDate.getDate() + 7);
  }
  return eventDate;
}

function startCountdown(targetDate) {
  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    updateFlip("days", days);
    updateFlip("hours", hours);
    updateFlip("minutes", minutes);
    updateFlip("seconds", seconds);
  }

  function updateFlip(id, newValue) {
    const element = document.getElementById(id);
    if (element.textContent !== newValue.toString().padStart(2, "0")) {
      element.classList.remove("animate");
      void element.offsetWidth; // Reinicia la animación
      element.classList.add("animate");
      element.textContent = newValue.toString().padStart(2, "0");
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + ((7 - launchDate.getDay()) % 7));
launchDate.setHours(9, 0, 0, 0);
startCountdown(launchDate);

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMoriah = document.getElementById("navMoriah");
  const overlay = document.getElementById("menu-overlay");
  const menuBtn = document.getElementById("menu-btn");

  function toggleMenu() {
    const isOpen = navMoriah.classList.contains("open");

    if (isOpen) {
      navMoriah.classList.remove("open");
      overlay.classList.remove("active");
      menuToggle.checked = false; // Desmarcar el checkbox
    } else {
      navMoriah.classList.add("open");
      overlay.classList.add("active");
      menuToggle.checked = true; // Marcar el checkbox
    }
  }

  menuBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
});
