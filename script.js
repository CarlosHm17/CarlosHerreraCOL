document.addEventListener("DOMContentLoaded", function() {
    const materiaElements = document.querySelectorAll('.materia');

    function checkVisibility() {
        materiaElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Llama la función al cargar la página por si algún contenedor ya es visible.
});

  