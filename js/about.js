import AOS from 'aos';
import 'aos/dist/aos.css'; // Importar los estilos de AOS
AOS.init({
  duration: 1200, // Duración de la animación
  once: false, // Las animaciones se pueden repetir
  easing: 'ease-in-out', // Tipo de aceleración
  offset: 100, // Iniciar la animación cuando el elemento esté a 100px de la vista
});
