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


// seccion de banner
import Spheres2Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.8/build/backgrounds/spheres2.cdn.min.js'

const bg = Spheres2Background(document.getElementById('webgl-canvas'), {
  count: 200,
  colors: [0xff0000, 0x0, 0xffffff],
  minSize: 0.0,
  maxSize: 0.5
})

const button1 = document.getElementById('colors-btn')

document.body.addEventListener('click', (ev) => {
  if (ev.target !== button1) bg.togglePause()
})

button1.addEventListener('click', () => {
  bg.spheres.setColors([0xffffff * Math.random(), 0xffffff * Math.random(), 0xffffff * Math.random()])
  bg.spheres.light1.color.set(0xffffff * Math.random())
})



