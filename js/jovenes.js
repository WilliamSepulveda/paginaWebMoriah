// seccion de checkbox
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


