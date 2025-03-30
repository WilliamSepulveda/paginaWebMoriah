    let index = 0;
    const slides = document.querySelectorAll(".images");
    
    function updateSlider() {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }
    
    function nextSlide() {
        index = (index + 1) % slides.length;
        updateSlider();
    }
    
    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        updateSlider();
    }
    
    setInterval(nextSlide, 3000); // Cambia cada 3 segundos


    document.getElementById("formularioVisitaMoriah").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío tradicional del formulario
    
        // Recoger los valores del formulario
        const nombre = document.getElementById("nombreMoriah").value.trim();
        const apellido = document.getElementById("apellidoMoriah").value.trim();
        const email = document.getElementById("emailMoriah").value.trim();
        const fechaVisita = document.getElementById("fechaVisitaMoriah").value.trim();
        const acompanante = document.getElementById("acompananteMoriah").value.trim() || "No";
    
        // Crear el mensaje a enviar
        const mensajeCompleto = `🙏 ¡Hola! Soy ${nombre} ${apellido}, me interesaría visitar su iglesia. Te envío mi correo: "${email}". Creo que iré el "${fechaVisita}" y llevaré acompañante: "${acompanante}".`;
    
        // Crear el enlace para abrir WhatsApp con el mensaje predefinido
        const numeroWhatsApp = "+573134024782"; // Asegúrate de que el número esté bien formateado
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeCompleto)}`;
    
        // Redirigir a WhatsApp
        window.open(url, "_blank");
    });
    



    document.addEventListener("DOMContentLoaded", function() {
        const versiculo = {
            texto: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito...",
            referencia: "Juan 3:16"
        };
        
        document.getElementById("versiculo-texto").textContent = `"${versiculo.texto}"`;
        document.getElementById("versiculo-referencia").textContent = `- ${versiculo.referencia}`;
        
        document.getElementById("ver-mas").addEventListener("click", function() {
            window.location.href = "https://play.google.com/store/apps/details?id=com.offline.bible";
        });

        document.getElementById("conoce-mas").addEventListener("click", function() {
            window.location.href = "https://play.google.com/store/search?q=https://play.google.com/store/apps/details?id%3Dcjvg.santabiblia%26hl%3Des_CO&c=apps";
        });
    });